import Vue from 'vue'
import VueRouter from 'vue-router'

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
