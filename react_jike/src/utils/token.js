export function getToken() {
    return localStorage.getItem('token')
}

export function removeToken() {
    localStorage.removeItem('token')
}

export function setToken(val) {
    localStorage.setItem('token', val)
}
