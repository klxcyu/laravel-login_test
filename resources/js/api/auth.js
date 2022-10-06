import http from '@/api/http'
import store from '@/store/index'

//로그인 요청
export async function login(payload) {
    return http.post('/api/auth/login', {
        email: payload.email,
        password: payload.password,
    })
}

//로그아웃 요청
export async function logout() {
    return http.post('/api/auth/logout', {}, {
        headers: {
            Authorization: `Bearer ${token()}`
        }
    })
}

//회원가입 요청
export async function register(payload) {
    return http.post('/api/auth/register', {
        name: payload.name,
        email: payload.email,
        password: payload.password,
        password_confirmation: payload.password_confirmation,
    })
}

//유저 토큰 유효 체킹
export async function tokenChecking() {
    return http.post('/api/auth/me', {}, {
        headers: {
            Authorization: `Bearer ${token()}`
        }
    })
}

//토큰 리프레쉬
export async function refreshToken() {
    return http.post('/api/auth/refresh', {}, {
        headers: {
            Authorization: `Bearer ${token()}`
        }
    })
}

function token() {
    return store.getters['modules/auth/getUserToken']
}


