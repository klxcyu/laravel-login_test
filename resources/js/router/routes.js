import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '~/Index'
import Login from '~/login/Login'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: '/',
            component: Index
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ],
})

export default router
