import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '~/Index'
import Login from '~/login/Login'
import store from '@/store/index'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: '/',
            component: Index,
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                leftNavOff: true,
            }
        }
    ],
})

router.beforeEach((to, from, next) => {
    const isLogin = store.getters['modules/user/isLogin']

    if(to.matched.some(record => record.meta.requiresAuth)) {
        /* if(!isLogin) {
            alert('로그인이 필요한 서비스 입니다!')
            next({
                name: 'login',

            })
        } */
        next()
    } else {
        next()
    }
})

export default router
