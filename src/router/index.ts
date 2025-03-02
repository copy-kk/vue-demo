import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: {
      path: '/file'
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
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404.vue')
  },
  {
    path: '/file',
    name: 'file',
    component: () => import('@/views/file/file.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
