import Vue from 'vue'
import EC from './components/EC'
import lodash from 'lodash'

Vue.use(lodash)

new Vue({
    el: '#app',
   	render: h => h(EC)
})
