import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout/index.vue';

Vue.use(VueRouter)


export const personCenterRoutes = [
  {
    path: 'personInfo',
    name: 'PersonInfo',
    meta: {
      text: '个人中心'
    },
    component: () => import('@/views/PersonInfo/index.vue')
  },
  {
    path: 'historyExercises',
    name: 'HistoryExercises',
    meta: {
      text: '历史习题'
    },
    component: () => import('@/views/HistoryExercises/index.vue')
  },
  {
    path: 'historyExams',
    name: 'HistoryExams',
    meta: {
      text: '历史考试'
    },
    component: () => import('@/views/HistoryExams/index.vue')
  },
  {
    path: 'mistakesCollection',
    name: 'MistakesCollection',
    meta: {
      text: '错题集'
    },
    component: () => import('@/views/MistakesCollection/index.vue')
  }
]

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          i: 0
        },
        component: () => import('@/views/Home/index.vue')
      },
      {
        path: '/exams',
        name: 'Exams',
        meta: {
          i: 1
        },
        component: () => import('@/views/Exams/index.vue')
      },
      {
        path: '/exercises',
        name: 'Practices',
        meta: {
          i: 2
        },
        component: () => import('@/views/Exercises/index.vue')
      },
      {
        path: '/personCenter',
        name: 'PersonCenter',
        redirect: '/personCenter/personInfo',
        component: () => import('@/views/PersonCenter/index.vue'),
        children: personCenterRoutes
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
