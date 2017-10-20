import axios from 'axios';
import _ from 'lodash';
import { NEWS_LASEST, IMG_PREFIX, NEWS_DETAIL_ID, NEWS_BEFORE, NEWS_THEMES, NEWS_THEME_DETAIL } from './url-config';

//  处理图片的路径
function changeImgSrc(imgs) {
    let isArray = _.isArray(imgs),
        replaceImgs = [];
    imgs = isArray ? imgs : Array.of(imgs);
    replaceImgs = imgs.map(img => img.replace(/https?:\/\//g, IMG_PREFIX));
    return isArray ? replaceImgs : _.head(replaceImgs);

}
// 格式化日期 call
function formateDate(fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

export default {
    getNewsLatest({ commit }) {
        axios.get(NEWS_LASEST).then(response => {
            let data = response.data;
            let stories = _.map(_.get(data, 'stories', []), (story) => {
                let images = changeImgSrc(story.images);
                return {
                    ...story,
                    ... { images }
                }
            });

            let top_stories = _.map(_.get(data, 'top_stories', []), (story) => {
                let image = changeImgSrc(Array.of(story.image));
                return {
                    ...story,
                    ... { image: image[0] }
                }
            })

            data = {...data, articles: stories, banners: top_stories };
            commit('updateLastNews', { data });
            setTimeout(() => commit('hideWelcome', { hideWelcome: true }), 2000);
        })
    },
    getNewsDetail({ commit }, { newsId }) {
        let newsDetailUrl = NEWS_DETAIL_ID.replace(':id', newsId);
        axios.get(newsDetailUrl).then(response => {
            let data = response.data;
            let body = data.body;

            data = {...data, ... { body: body.replace(/https?:\/\/(.+?)\.(jpg|png|gif)/ig, IMG_PREFIX + "$1.$2") } }
            commit('getNewsDetail', { data });
        })
    },
    getNewsBefore({ state, commit }, { now }) {
        let loadedArticles = state.news.articles;
        let nowDateStr = _.isDate(now) ? formateDate.call(now, 'yyyyMMdd') : now;
        let newsBeforeUrl = NEWS_BEFORE.replace(':date', nowDateStr);
        // https://news-at.zhihu.com/api/4/news/before/20131119
        axios.get(newsBeforeUrl).then(response => {
            let { stories = [], date } = response.data;
            stories = stories.map(stroy => _.merge({}, stroy, { images: changeImgSrc(stroy.images || []) }));
            stories = [...loadedArticles, ...stories];
            commit('updateNewsBefore', {
                data: stories
            });
            commit('updateArticleDate', { date });
        });
    },
    getThemes({ commit }) {
        axios.get(NEWS_THEMES).then(response => {
            let { others = [] } = response.data;
            let themes = others.map(other => {
                let thumbnail = changeImgSrc(other.thumbnail);
                return {
                    ...other,
                    thumbnail
                }
            });
            commit('updateNewsThemes', { themes });
        });
    },
    getThemeDetail({ commit }, { id }) {
        let themeDetailUrl = NEWS_THEME_DETAIL.replace(':id', id);
        axios.get(themeDetailUrl).then(response => {
            let { image, stories, background, editors } = response.data,
                detail = {};

            image = changeImgSrc(image);
            stories = _.unionBy([..._.filter(stories, story => story.hasOwnProperty('images')).map(story =>
                _.assign({}, story, {
                    images: changeImgSrc(story.images)
                })
            ), ...stories], 'id');
            editors = editors.map(editor =>
                _.assign({}, editor, {
                    avatar: changeImgSrc(editor.avatar)
                })
            );
            background = changeImgSrc(background);
            detail = _.assign({}, response.data, {
                background,
                stories,
                image,
                editors
            });
            commit('updateThemeDetail', { detail });
        });
    }

}