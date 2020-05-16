export default [
    {
        path: '/answer',
        name: 'Answer',
        meta: {
            i: 0
        },
        component: () => import('@/views/AnswerArea/index.vue')
    }
]