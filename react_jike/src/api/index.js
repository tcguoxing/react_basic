import request from './request'

export function LoginApi(loginForm) {
    return request({
        method: 'POST',
        url: '/users/login',
        data: loginForm
    })
}

export function getUsers() {
    return request({
        method: "GET",
        url: '/users'
    })
}
