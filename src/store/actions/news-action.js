import axios from 'axios';
import _ from 'lodash';
import { NEWS_LASEST, IMG_PREFIX, NEWS_DETAIL_ID } from './url-config';

//  处理图片的路径
function changeImgSrc(imgs) {
    return imgs.map(img => img.replace(/https?:\/\//g, IMG_PREFIX));
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

            data = {...data, stories, top_stories }
            commit('updateLastNews', { data });
        })
    },
    getNewsDetail({ commit }, { newsId }) {
        let newsDetailUrl = NEWS_DETAIL_ID.replace(':id', newsId);
        axios.get(newsDetailUrl).then(response => {
            let data = response.data;
            let body = data.body;
            data = {...data, ... { body: body.replace(/<img(.*)https?:\/\//g, "<img$1" + IMG_PREFIX) } }
            commit('getNewsDetail', { data });
        })
    }

}