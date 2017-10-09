import Todo from '@views/todo.vue';
import HomePage from '@views/home-page.vue';
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
];

export default routes;