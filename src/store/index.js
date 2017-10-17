import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        todos: [],
        news: {
            articles: [
                // {
                //     ga_prefix:'',
                //     title: 'ONE 实验室团队解散了，别着急，非虚构还好着呢',
                //     images: ['',],
                //     id:123122,
                //     type:0,
                // }
            ],
            banners: [{ img: require("@static/imgs/banner-1.jpg"), text: '神特喵知道发生了什么' }, { img: require("@static/imgs/banner-2.jpg"), text: '我也是一脸懵逼啊' }],
            openSlider: false,
            openShare: false,
            hideWelcome: false,
            articleDetail: {}, //来自网络接口
            articleDate: new Date(), //默认为今天
            themes: [] //侧边栏

        }
    },
    mutations,
    actions,
    getters
});

export default store;