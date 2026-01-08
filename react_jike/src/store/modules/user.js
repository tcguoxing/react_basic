import {createSlice} from "@reduxjs/toolkit";
import request from "@/api/request";
import {message} from "antd";

const user = createSlice({
    name: 'user',
    initialState: {
        userInfo:{}
    },
    reducers: {
        setUserInfo(state, action) {
            state.userInfo = action.payload
        },
        clearUserInfo(state) {
            state.userInfo = {}
        }
    }
})

export const {setUserInfo, clearUserInfo} = user.actions


export default user.reducer
