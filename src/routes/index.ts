import { useRouter, createRouter,  createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
const routes: Array<RouteRecordRaw>  = [
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
                meta: {
                    title: 'Dashboard'
                }
            }
        ]
    },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});

export default router;
