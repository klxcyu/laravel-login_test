const state = {
    type: null,
    message: null,
    snackbar: false,
}

const getters = {
    type: state => state.type,
    message: state => state.message,
    snackbar: state => state.snackbar,
}

const mutations = {
    setType: (state, payload) => { state.type = payload },
    setMessage: (state, payload) => { state.message = payload },
    setSnackbar: (state, payload) => { state.snackbar = payload },
    resetDatas: state => {
        state.type = null
        state.message = null
        state.snackbar = false
    }
}

const actions = {
    setType: ({ commit }, payload) => { commit('setType', payload) },
    setMessage: ({ commit }, payload) => { commit('setMessage', payload) },
    setSnackbar: ({ commit }, payload) => { commit('setSnackbar', payload) },
    resetDatas: ({ commit }) => { commit('resetDatas') },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
