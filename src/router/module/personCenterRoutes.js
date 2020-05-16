export default  [
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