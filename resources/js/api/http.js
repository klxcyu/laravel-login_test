import axios from 'axios'
import progress from '@/plugins/storeDispatcher/progress'
import Vue from 'vue'

Vue.use(progress)
const v = new Vue()
const prs = v.$_PROGRESS

const instance = axios.create({
    baseUrl: '127.0.0.1'
})

instance.interceptors.request.use(function(config) {
    prs.start()
    return config
})

instance.interceptors.response.use(function(config) {
    prsSuccess()
    return config
}, (err) => {
    prsSuccess()
    return Promise.reject(err)
})

let prsTimeout = null
function prsSuccess() {
    if(prsTimeout) clearTimeout(prsTimeout)

    prsTimeout = setTimeout(() => {
        prs.success()
    }, 1000);
}

export default instance
