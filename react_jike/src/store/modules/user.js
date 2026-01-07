import {createSlice} from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: {
        token: null,
        level: null
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload
        }
    }
})

export const {setToken} = user.actions

export default user.reducer
