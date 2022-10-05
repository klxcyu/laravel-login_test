import store from '@/store/index'

export default {
    install(Vue) {
        const pt = Vue.prototype
        pt.$msg = {
            error: (msg) => {
                snackbar.message('error', msg)
            },
            success: (msg) => {
                snackbar.message('success', msg)
            },
            warning: (msg) => {
                snackbar.message('warning', msg)
            },
            info: (msg) => {
                snackbar.message('info', msg)
            },
        }
    }
}

const snackbarModulePath = 'modules/snackbar'

export const snackbar = {
    message: (type, msg) => {
        store.dispatch(`${snackbarModulePath}/setType`, type)
        store.dispatch(`${snackbarModulePath}/setMessage`, msg)
        store.dispatch(`${snackbarModulePath}/setSnackbar`, true)
    }
}
