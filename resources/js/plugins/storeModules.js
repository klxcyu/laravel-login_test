export default {
    install(Vue) {
        const pt = Vue.prototype
        pt.$authModulePath = 'modules/auth'
        pt.$progressModulePath = 'modules/progress'
    }
}


