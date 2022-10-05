import Vue from 'vue'
import lodash from 'lodash'
import axios from 'axios'
import router from '@/router/routes'
import Vuetify from 'vuetify'
import colors from 'vuetify/lib/util/colors'
import storeModules from '@/assets/js/storeModules'
import snackbar from '@/assets/js/snackbarEvent'
import VuetifyToast from 'vuetify-toast-snackbar'
import App from '@/layouts/App'
import store from '@/store/index'
import 'vuetify/dist/vuetify.min.css'
import '@/assets/scss/reset.scss'


Vue.use(lodash)
Vue.use(Vuetify)
/* export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.red.darken1, // #E53935
                secondary: colors.red.lighten4, // #FFCDD2
                accent: colors.indigo.base, // #3F51B5
            },
        },
    },
}) */
Vue.use(storeModules)
Vue.use(snackbar)
Vue.use(VuetifyToast, {
    x: 'top', // default
    y: 'top', // default
    color: 'info', // default
    icon: 'info',
    iconColor: '', // default
    classes: [
        'snack_bars'
    ],
    timeout: 2000, // default
    dismissable: true, // default
    multiLine: false, // default
    vertical: false, // default
    queueable: false, // default
    showClose: false, // default
    closeText: '', // default
    closeIcon: 'close', // default
    closeColor: '', // default
    slot: [], //default
    shorts: {
        custom: {
            color: 'purple'
        }
    },
    property: '$toast' // default
})

Vue.prototype.$axios = axios;

new Vue({
    store,
    router,
    vuetify: new Vuetify(),
    render: h => h(App),
    el: '#app',
})
