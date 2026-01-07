import {createSlice} from "@reduxjs/toolkit";
import {request} from "@/api";
import {message} from "antd";

const user = createSlice({
    name: 'user',
    initialState: {
        username: null,
        id: null,
        role: null,
        isActive: null,
        phone: null,
        email: null,
        token: null,
    },
    reducers: {
        setInfo(state, action) {
            const {accessToken, user} = action.payload
            state.token = accessToken
            const {id, username, role, isActive, phone, email} = user
            state.id = id
            state.role = role
            state.username = username
            state.isActive = isActive
            state.phone = phone
            state.email = email
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
