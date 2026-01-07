import {createSlice} from "@reduxjs/toolkit";
import {request} from "@/api";
import {message} from "antd";
const token = localStorage.getItem('token') || null
const username = localStorage.getItem('username') || null
const id = localStorage.getItem('id') || null
const role = localStorage.getItem('role') || null
const isActive = localStorage.getItem('isActive') || null
const phone = localStorage.getItem('phone') || null
const email = localStorage.getItem('email') || null

const user = createSlice({
    name: 'user',
    initialState: {
        token: token,
        username: username,
        id: id,
        role: role,
        isActive: isActive,
        phone: phone,
        email: email,
    },
    reducers: {
        setInfo(state, action) {
            const {accessToken, user} = action.payload
            state.token = accessToken
            localStorage.setItem('token', state.token)
            const {id, username, role, isActive, phone, email} = user
            state.id = id
            localStorage.setItem('id', state.id)
            state.role = role
            localStorage.setItem('role', state.role)
            state.username = username
            localStorage.setItem('username', state.username)
            state.isActive = isActive
            localStorage.setItem('isActive', state.isActive)
            state.phone = phone
            localStorage.setItem('phone', state.phone)
            state.email = email
            localStorage.setItem('email', state.email)
        },
    }
})

export const {setInfo} = user.actions

export const fetchLogin = function(loginForm) {
    return async (dispatch) =>{
        await request.post('/users/login', loginForm).then(res => {
            console.log('res login: ', res)
            dispatch(setInfo(res.data))
        }).catch(_ => {

        })
    }
}

export default user.reducer
