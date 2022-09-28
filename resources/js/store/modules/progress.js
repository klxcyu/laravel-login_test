const state = {
    value: 0,
    show: true,
    interval: 0,
}

const mutations = {
    startProgress: () => {
        state.show = true
        /* state.interval = setInterval(() => {
            if (state.value === 100) {
                clearInterval(state.interval)
                state.show = false
            }
            state.value += 20
        }, 1000) */
    },
    successProgress: () => {
        state.show = false
        /* state.value = 100 */
    },
    destroyProgress: () => {
        /* state.value = 0 */
        state.show = false
        /* clearInterval(state.interval) */
    },

}

const actions = {
    startProgress: ({ commit }) => {
        commit('startProgress')
    },
    successProgress: ({ commit }) => {
        commit('successProgress')
    },
    destroyProgress: ({ commit }) => {
        commit('destroyProgress')
    },
}

const getters = {
    value: () => {
        return state.value
    },
    query: () => {
        return state.query
    },
    show: () => {
        return state.show
    },
    interval: () => {
        return state.interval
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}
