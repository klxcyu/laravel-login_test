import { AUTH_MU } from '@/store/mutation-types'

const state = {
    token: null,
    isLogin: null,
}

const getters = {
    getUserToken: state => state.token,
    isLogin: state => state.isLogin,
}

const mutations = {
    [AUTH_MU.SET_USER_TOKEN]: (state, payload) => {
        state.token = payload
    },
    [AUTH_MU.SET_IS_LOGIN]: (state, payload) => {
        state.isLogin = payload
    },
    [AUTH_MU.LOGOUT]: state => {
        state.token = null
        state.isLogin = null
    }
}

const actions = {
    setUserToken: ({ commit }, payload) => {
        commit(AUTH_MU.SET_USER_TOKEN, payload)
    },
    setIsLogin: ({ commit }, payload) => {
        commit(AUTH_MU.SET_IS_LOGIN, payload)
    },
    logout: ({ commit }) => {
        commit(AUTH_MU.LOGOUT)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

