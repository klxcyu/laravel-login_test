import Vue from 'vue'
import EC from './components/EC'
import lodash from 'lodash'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'


Vue.use(lodash)
Vue.use(Vuetify)

new Vue({
    vuetify: new Vuetify(),
    el: '#app',
   	render: h => h(EC),
})
