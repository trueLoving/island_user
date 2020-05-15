import router from './router'

const whiteList = ['/home']

router.beforeEach(async(to,from,next)=>{
    // todo 路由拦截
    next();
})


router.afterEach(()=>{
    
})
