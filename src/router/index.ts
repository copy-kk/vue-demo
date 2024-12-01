import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: {
      path: '/index'
    }
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/error/403.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
