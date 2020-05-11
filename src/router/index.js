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
        meta: {
          i: 0
        },
        component: () => import('@/views/Home/index.vue')
      },
      {
        path: 'exams',
        name: 'Exams',
        meta: {
          i: 1
        },
        component: () => import('@/views/Exams/index.vue')
      },
      {
        path: 'practices',
        name: 'Practices',
        meta: {
          i: 2
        },
        component: () => import('@/views/Practices/index.vue')
      },
      {
        path: 'personCenter',
        name: 'PersonCenter',
        component: () => import('@/views/PersonCenter/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
