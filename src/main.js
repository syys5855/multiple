import Vue from 'vue';
import VueRouter from 'vue-router';
import VueTap from 'v-tap';
import routes from './routes.js';
import store from './store';
import App from '@views/app.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import '@/style/common.scss';
Vue.use(VueRouter);
Vue.use(VueTap);

const router = new VueRouter({
    routes,
    linkActiveClass: 'disabled'
});

new Vue({
    el: "#app",
    router,
    store,
    render(h) {
        return h(App)
    }
})