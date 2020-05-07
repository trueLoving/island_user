import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout/index.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'exams',
        name: 'Exams',
        component: () => import('@/views/Exams.vue')
      },
      {
        path: 'practices',
        name: 'Practices',
        component: () => import('@/views/Practices.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
