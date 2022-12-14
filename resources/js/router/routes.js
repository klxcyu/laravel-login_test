import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '~/Index'
import Auth from '~/auth/Auth'
import Login from '~/auth/Login'
import Register from '~/auth/Register'

import Test from '~/auth/Test'

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
            path: '/auth',
            name: 'auth',
            component: Auth,
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: Login,
                    meta: {
                        leftNavOff: true,
                        isLoginCheck: true,
                    }
                },
                {
                    path: 'register',
                    name: 'register',
                    component: Register,
                    meta: {
                        leftNavOff: true,
                        isLoginCheck: true,
                    }
                },
                {
                    path: 'test',
                    name: 'test',
                    component: Test,
                    meta: {
                        leftNavOff: true,
                        isLoginCheck: true,
                    }
                },
            ]
        },
    ],
})

router.beforeEach((to, from, next) => {
    const prs = router.app.$_PROGRESS
    prs.start()
    const msg = router.app.$_MSG
    const matched = param => to.matched.some(record => record.meta[param])
    const isLogin = store.getters['modules/auth/isLogin']

    if(matched('isLoginCheck')) {
        if(isLogin) msg.warning('이미 로그인 하셨습니다.');
    }

    if(matched('requiresAuth')) {
        if(!isLogin) {
            msg.warning('로그인이 필요한 서비스 입니다!')
            next({
                name: 'login',
            })
        }
        next()
    } else {
        next()
    }

    prsSuccess()
})

router.afterEach((to, from) => {
    prsSuccess()
})

let prsTimeout = null
function prsSuccess() {
    const prs = router.app.$_PROGRESS
    if(prsTimeout) clearTimeout(prsTimeout)

    prsTimeout = setTimeout(() => {
        prs.success()
    }, 1000);
}

export default router
