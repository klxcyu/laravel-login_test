import { SNACKBAR_MU } from "@/store/mutation-types"

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
    [SNACKBAR_MU.SET_TYPE]: (state, payload) => {
        state.type = payload
    },
    [SNACKBAR_MU.SET_MESSAGE]: (state, payload) => {
        state.message = payload
    },
    [SNACKBAR_MU.SET_SNACKBAR]: (state, payload) => {
        state.snackbar = payload
    },
    [SNACKBAR_MU.RESET_SNACKBAR_DATAS]: state => {
        state.type = null
        state.message = null
        state.snackbar = false
    }
}

const actions = {
    setType: ({ commit }, payload) => {
        commit(SNACKBAR_MU.SET_TYPE, payload)
    },
    setMessage: ({ commit }, payload) => {
        commit(SNACKBAR_MU.SET_MESSAGE, payload)
    },
    setSnackbar: ({ commit }, payload) => {
        commit(SNACKBAR_MU.SET_SNACKBAR, payload)
    },
    resetDatas: ({ commit }) => {
        commit(SNACKBAR_MU.RESET_SNACKBAR_DATAS)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
