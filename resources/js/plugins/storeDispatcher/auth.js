import store from "@/store/index"

const authModulePath = 'modules/auth'

export default {
    install(Vue) {
        const pt = Vue.prototype
        pt.$_AUTH = {
            login: (payload) => {
                auth.dispatcher('login', payload)
            },
            logout: () => {
                auth.dispatcher('logout')
            },
            register: (payload) => {
                auth.dispatcher('register', payload)
            },
            tokenChecking: () => {
                auth.dispatcher('tokenChecking')
            }
        }
    }
}

export const auth = {
    dispatcher: (type, payload = null) => {
        store.dispatch(`${authModulePath}/${type}`, payload)
    }
}

