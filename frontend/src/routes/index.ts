import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '@/pages/home/Home.vue'
import MenuList from '@/pages/menu/MenuList.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/menu',
    name: 'MenuList',
    component: MenuList,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router