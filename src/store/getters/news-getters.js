import _ from 'lodash';
import { IMG_PREFIX } from '../actions/url-config.js';
export default {
    imgUrl: () => src => src.replace(/https?:\/\//, IMG_PREFIX),
    nextArticle: state => (articleId) => {
        let articles = _.get(state, 'news.articles', []);
        let curIndex = _.findIndex(articles, article => article.id === articleId);
        return curIndex < articles.length ? articles[curIndex + 1] : null;
    },
}