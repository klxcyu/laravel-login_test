import store from "@/store/index";

export default {
    install(Vue) {
        const pt = Vue.prototype
        pt.$_PROGRESS = {
            start: () => {
                progress.dispatcher('start')
            },
            success: () => {
                progress.dispatcher('success')
            },
        }
    }
}

export const progress = {
    dispatcher: (type) => {
        store.dispatch(`modules/progress/${type}`)
    }
}
