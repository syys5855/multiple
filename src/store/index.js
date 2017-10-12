import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        todos: [],
        news: {
            articles: [{
                title: 'ONE 实验室团队解散了，别着急，非虚构还好着呢'
            }, {
                title: '微信悄悄地「松了口」，现在你可以在小程序购买虚拟商品了'
            }, {
                title: '大误 · 获得超能力的机会来了'
            }],
            banners: [{ img: require("@static/imgs/banner-1.jpg"), text: '神特喵知道发生了什么' }, { img: require("@static/imgs/banner-2.jpg"), text: '我也是一脸懵逼啊' }],
            openSlider: false
        }
    },
    mutations
});

export default store;