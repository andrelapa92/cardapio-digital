import { createRouter, createWebHistory } from 'vue-router';
import MenuList from '@/pages/menu/MenuList.vue';
const routes = [
    {
        path: '/menu',
        name: 'MenuList',
        component: MenuList,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
