export default {
    openSlider(state, { openSlider }) {
        state.news.openSlider = openSlider;
    },
    updateLastNews(state, { data }) {
        state.news = {
            ...state.news,
            ...data
        }
    },
    getNewsDetail(state, { data }) {
        state.news = {
            ...state.news,
            articleDetail: data
        }
    },
    openShare(state, { openShare }) {
        state.news.openShare = openShare;
    },
    hideWelcome(state, { hideWelcome }) {
        state.news.hideWelcome = hideWelcome;
    },
    resetNewsDetail(state) {
        state.news.articleDetail = {};
        state.news.articleDate = new Date();
    },
    updateArticleDate(state, { date }) {
        state.news.articleDate = date;
    },
    updateNewsBefore(state, { data }) {
        state.news.articles = data;
    }
}