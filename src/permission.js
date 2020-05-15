import router from './router'
import store from './store'
import QProgress from 'qier-progress'

const qprogress = new QProgress({
    minimum: 0.08,
    height: 3,
    color: '#17829f'
})

// 路由白名单列表
const whiteList = ['/home']

router.beforeEach(async (to, from, next) => {

    qprogress.start();

    //获取登录状态
    const isLogin = store.getters.isLogin;

    // todo 路由拦截
    if (isLogin) {
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
