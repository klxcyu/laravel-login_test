import store from "@/store/index"

const authModulePath = 'modules/auth'

export default {
    install(Vue) {
        const pt = Vue.prototype
        pt.$_AUTH = {
            login: (token) => {
                auth.dispatcher('login', token, true)
            },
            logout: () => {
                auth.dispatcher('logout')
            },
        }
    }
}


export const auth = {
    dispatcher: (type, token = null, isLogin = null) => {
        if(type === 'login') {
            store.dispatch(`${authModulePath}/setUserToken`, token)
            store.dispatch(`${authModulePath}/setIsLogin`, isLogin)
        } else {
            store.dispatch(`${authModulePath}/${type}`)
        }
    }
}
