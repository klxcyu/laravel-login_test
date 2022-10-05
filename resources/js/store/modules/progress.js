import { PROGRESS_MU } from '@/store/mutation-types.js'

const state = {
    value: 0,
    show: false,
    interval: 0,
}

const getters = {
    value: state => state.value,
    query: state => state.query,
    show: state => state.show,
    interval: state => state.interval,
}

const mutations = {
    [PROGRESS_MU.START_PROGRESS]: state => {
        state.show = true
    },
    [PROGRESS_MU.SUCCESS_PROGRESS]: state => {
        state.show = false
    },
    [PROGRESS_MU.DESTROY_PROGRESS]: state => {
        state.show = false
    },
}

const actions = {
    startProgress: ({ commit }) => {
        commit(PROGRESS_MU.START_PROGRESS)
    },
    successProgress: ({ commit }) => {
        commit(PROGRESS_MU.SUCCESS_PROGRESS)
    },
    destroyProgress: ({ commit }) => {
        commit(PROGRESS_MU.DESTROY_PROGRESS)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}
