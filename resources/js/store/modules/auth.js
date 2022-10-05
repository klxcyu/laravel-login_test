const state = {
    token: null,
    isLogin: null,
}

const getters = {
    getUserToken: state => state.token,
    isLogin: state => state.isLogin,
}

const mutations = {
    setUserToken: (state, payload) => state.token = payload,
    setIsLogin: (state, payload) => state.isLogin = payload,
    logout: (state) => {
        state.token = null
        state.isLogin = null
    }
}

const actions = {
    setUserToken: ({ commit }, payload) => commit('setUserToken', payload),
    setIsLogin: ({ commit }, payload) => commit('setIsLogin', payload),
    logout: ({ commit }) => commit('logout'),
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

