export default {
    openSlider(state, { openSlider }) {
        state.news.openSlider = openSlider;
    },
    updateLastNews(state, { data }) {
        state.news = {
            ...state.news,
            articles: data.stories,
            banners: data.top_stories
        }
    },
    getNewsDetail(state, { data }) {
        state.news = {
            ...state.news,
            articleDetail: data
        }
    }
}