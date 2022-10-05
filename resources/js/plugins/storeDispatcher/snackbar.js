import store from '@/store/index'

const snackbarModulePath = 'modules/snackbar'

export default {
    install(Vue) {
        const pt = Vue.prototype
        pt.$_MSG = {
            error: (msg) => {
                snackbar.dispatcher('error', msg)
            },
            success: (msg) => {
                snackbar.dispatcher('success', msg)
            },
            warning: (msg) => {
                snackbar.dispatcher('warning', msg)
            },
            info: (msg) => {
                snackbar.dispatcher('info', msg)
            },
        }
    }
}


export const snackbar = {
    dispatcher: (type, msg) => {
        store.dispatch(`${snackbarModulePath}/setType`, type)
        store.dispatch(`${snackbarModulePath}/setMessage`, msg)
        store.dispatch(`${snackbarModulePath}/setSnackbar`, true)
    }
}
