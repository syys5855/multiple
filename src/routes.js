import Todo from '@views/todo.vue';
import HomePage from '@views/home-page.vue';
import News from '@views/news.vue';
import NewsDetail from '@views/news-detail.vue';
import IScroll from '@views/iscroll.vue';
import ThemeDetail from '@views/theme-detail.vue';
const routes = [
    { path: '/', redirect: '/home-page' },
    {
        path: '/home-page',
        component: HomePage
    },
    {
        path: '/todo',
        component: Todo,
    },
    {
        path: '/news',
        component: News
    },
    {
        path: '/news-detail/:id',
        name: 'news-detail',
        component: NewsDetail
    },
    {
        path: '/iscroll',
        component: IScroll
    },
    {
        path: '/theme-detail/:id',
        component: ThemeDetail,
        name: 'theme-detail'
    }
];

export default routes;