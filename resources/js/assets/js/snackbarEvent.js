import store from '@/store/index'

export default {
    install(Vue) {
        const pt = Vue.prototype
        pt.$msg = {
            error: (msg) => snackbar.message('error', msg),
            success: (msg) => snackbar.message('success', msg),
            warning: (msg) => snackbar.message('warning', msg),
            info: (msg) => snackbar.message('info', msg),
        }
    }
}

const snackbarModulePath = 'modules/snackbar'

export const snackbar = {
    setType: (payload) => store.dispatch(`${snackbarModulePath}/setType`, payload),
    setMessage: (payload) => store.dispatch(`${snackbarModulePath}/setMessage`, payload),
    setSnackbar: (payload) => store.dispatch(`${snackbarModulePath}/setSnackbar`, payload),
    message: (type, msg) => {
        snackbar.setType(type)
        snackbar.setMessage(msg)
        snackbar.setSnackbar(true)
    }
}
