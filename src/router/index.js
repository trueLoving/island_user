import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout/index.vue';

Vue.use(VueRouter)

import  personCenterRoutes  from "./module/personCenterRoutes";


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
        path: '/registeredForExamination',
        name: 'RegisteredForExamination',
        meta: {
          i: 3
        },
        component: () => import('@/views/RegisteredForExamination/index.vue')
      },
      {
        path: '/personCenter',
        name: 'PersonCenter',
        redirect: '/personCenter/personInfo',
        component: () => import('@/views/PersonCenter/index.vue'),
        children: personCenterRoutes
      },
      {
        path: '/chapterArea',
        name: 'ChapterArea',
        component: () => import('@/views/ChapterArea/index.vue')
      },
      { 
        path: '/answerArea',
        name: 'AnswerArea',
        component: () => import('@/views/AnswerArea/index.vue')
      }
    ]
  },
  {
    path:'*',
    name:'404',
    component:()=>import('@/views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
