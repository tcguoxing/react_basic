import { createSlice} from "@reduxjs/toolkit";
import request from "@/api/request";
import {removeToken, setToken} from "@/utils";
import {setUserInfo} from "@/store/modules/user";
import {LoginApi} from "@/api";

const tokenStore = createSlice({
    name: 'token',
    initialState: {
        token: null
    },
    reducers: {
        setTokenVal(state, action) {
            const {payload} = action
            setToken(payload)
            state.token = payload
        },
        clearToken(state) {
            state.token = null
            removeToken()
        }
    }
})

export const {setTokenVal, clearToken} = tokenStore.actions

export const fetchToken=function(loginForm) {
    return async(dispatch) => {
        let res = await LoginApi(loginForm)
        removeToken()
        dispatch(setTokenVal(res.data.accessToken))
        dispatch(setUserInfo(res.data.user))
    }
}

export default tokenStore.reducer
