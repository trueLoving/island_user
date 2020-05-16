import router from './router'
import store from './store'
import QProgress from 'qier-progress'
import { getToken } from '@/utils/auth' // get token from cookie



const qprogress = new QProgress({
    minimum: 0.08,
    height: 3,
    color: '#17829f'
})

// 路由白名单列表
const whiteList = ['/home']

router.beforeEach(async (to, from, next) => {

    qprogress.start();

    if (getToken()) {
        await store.dispatch('user/getInfo');
        next();
    } else {
        // 白名单 放行
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next(`/home?redirect?=${to.path}`);
        }
    }

})


router.afterEach(() => {
    qprogress.finish()
})
