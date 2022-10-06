import Vue from 'vue'
import msg from '@/plugins/storeDispatcher/snackbar'
import router from '@/router/routes'
import * as authApi from '@/api/auth'
import { AUTH_MU } from '@/store/mutation-types'

Vue.use(msg)
const vue = new Vue()

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
    //사용자인증 세팅
    setUserAuth: (commit, token, isLogin) => {
        commit(AUTH_MU.SET_USER_TOKEN, token)
        commit(AUTH_MU.SET_IS_LOGIN, isLogin)
    },
    //로그인
    login: async ({ commit }, payload) => {
        try {
            const response = await authApi.login(payload)

            if(response.status === 200) {
                actions.setUserAuth(commit, response.data.access_token, true)
                router.push('/')
            }
        } catch {
            vue.$_MSG.warning('아이디 또는 비밀번호가 옳바르지 않습니다!')
        }
    },
    //로그아웃
    logout: async ({ commit }) => {
        try {
            const response = await authApi.logout()
            console.log(response)

            if(response.status === 200) {
                commit(AUTH_MU.LOGOUT)
                router.push('/auth/login')
            }
        } catch(err) {
            console.log(`err ${err}`)
        }
    },
    //회원가입
    register: async ({ commit }, payload) => {
        try {
            const response = await authApi.register(payload)

            if(response.status === 200) {
                actions.setUserAuth(commit, response.data.access_token, true)
                vue.$_MSG.success('회원가입이 완료 되었습니다!')
                router.push('/')
            }
        } catch(err) {
            const data = err.response.data
            if(!data?.errors) {
                switch(data.message) {
                    case 'duplicate':
                        vue.$_MSG.warning('이미 존재하는 아이디 입니다.')
                        break;
                    case 'The given data was invalid.':
                        vue.$_MSG.error('요청 데이터가 옳바르지 않습니다!')
                        break;
                    default:
                        vue.$_MSG.error('처리 중 오류가 발생하였습니다.')
                        break;
                }
            } else {
                Object.keys(data.errors).forEach(k => {
                    vue.$_MSG.error(errors[k][0])
                })
            }
        }
    },
    //유저 토큰 체크
    tokenChecking: async ({ commit }) => {
        try {
            const res = await authApi.tokenChecking()
            if(res.status === 200) {
                const rt = await authApi.refreshToken()
                if(rt.status === 200) {
                    actions.setUserAuth(commit, rt.data.access_token, true)
                }
            }
        } catch(err) {
            commit(AUTH_MU.LOGOUT)
            router.push('/auth/login')
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

