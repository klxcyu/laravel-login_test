import Vue from 'vue'
import lodash from 'lodash'
import router from '@/router/routes'
import Vuetify from 'vuetify'
import App from '@/layouts/App'

import 'vuetify/dist/vuetify.min.css'


Vue.use(lodash)
Vue.use(Vuetify)

new Vue({
    router,
    vuetify: new Vuetify(),
    render: h => h(App),
    el: '#app',
})
