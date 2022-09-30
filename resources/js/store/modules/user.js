const state = {
    token: null,
    isLogin: null,
}

const getters = {
    getUserToken: state => state.token,
    isLogin: state => state.isLogin,
}

const mutations = {
    setUserToken(state, payload) {
        state.token = payload
    }
}

const actions = {
    setUserToken({ commit }, payload) {
        commit('setUserToken', payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

