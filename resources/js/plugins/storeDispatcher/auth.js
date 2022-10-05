import store from "@/store/index"

const authModulePath = 'modules/auth'

export default {
    install(Vue) {
        const pt = Vue.prototype
        pt.$auth = {
            login: (token) => {
                auth.authProcess('login', token, true)
            },
            logout: () => {
                auth.authProcess('logout')
            },
        }
    }
}

export const auth = {
    authProcess: (type, token = null, isLogin = null) => {
        if(type === 'login') {
            store.dispatch(`${authModulePath}/setUserToken`, token)
            store.dispatch(`${authModulePath}/setIsLogin`, isLogin)
        } else {
            store.dispatch(`${authModulePath}/logout`)
        }
    }
}
