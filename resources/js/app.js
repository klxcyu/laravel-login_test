import Vue from 'vue'
import lodash from 'lodash'
import axios from 'axios'
import router from '@/router/routes'
import Vuetify from 'vuetify'
import storeModules from '@/assets/js/storeModules'
import App from '@/layouts/App'
import store from '@/store/index'
import 'vuetify/dist/vuetify.min.css'
import '@/assets/scss/reset.scss'

Vue.use(lodash)
Vue.use(Vuetify)
Vue.use(storeModules)
Vue.prototype.$axios = axios;

new Vue({
    store,
    router,
    vuetify: new Vuetify(),
    render: h => h(App),
    el: '#app',
})
