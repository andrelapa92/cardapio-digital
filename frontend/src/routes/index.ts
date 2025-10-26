import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import MenuList from '@/pages/menu/MenuList.vue'

const routes: RouteRecordRaw[] = [
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