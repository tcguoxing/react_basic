import {configureStore, createSlice} from "@reduxjs/toolkit";
import {getData} from "../request";
import channelStore, {channelActions} from "./channelStore";

const counterStore = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment(state, action) {
            const {payload} = action
            if(payload) {
                state.count = state.count + payload
            } else {
                state.count++
            }
        },
        decrement(state) {
            state.count--
        },

    }
})

// const {increment, decrement} = counterStore.actions
export const counterActions = counterStore.actions


// 异步请求部分
const fetchPublicKey = () =>
{
    const publicKey = 'http://117.72.46.111/dev/auth/public-key'
    console.log("process.env.PUBLIC_KEY_URL: ", process.env.PUBLIC_KEY_URL)
    return (dispatch) => getData('http://117.72.46.111/dev/auth/public-key').then(result =>{
        console.log('result:', result)
        dispatch(channelActions.getInfo(result.data.timestamp))
    })
}

const store = configureStore({
    reducer: {
        anotherCounter: counterStore.reducer,
        channel: channelStore.reducer
    }
})

export default store

export {fetchPublicKey}


