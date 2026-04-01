import { createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import ProcessView from '@/views/ProcessView.vue';
import ResultsSummaryView from '@/views/ResultsSummaryView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/process',
            name: 'process',
            component: ProcessView,
        },
        {
            path: '/results-summary',
            name: 'results-summary',
            component: ResultsSummaryView,
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView,
        },
    ],
});

export default router;