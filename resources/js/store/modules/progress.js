const state = {
    value: 0,
    show: true,
    interval: 0,
}

const getters = {
    value: state => state.value,
    query: state => state.query,
    show: state => state.show,
    interval: state => state.interval,
}

const mutations = {
    startProgress: state => { state.show = true },
    successProgress: state => { state.show = false },
    destroyProgress: state => { state.show = false },
}

const actions = {
    startProgress: ({ commit }) => { commit('startProgress') },
    successProgress: ({ commit }) => { commit('successProgress') },
    destroyProgress: ({ commit }) => { commit('destroyProgress') },
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}
