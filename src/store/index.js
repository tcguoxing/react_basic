import {configureStore, createSlice} from "@reduxjs/toolkit";

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
        decrement(state, action) {
            const {payload} = action
            state.count--
        },

    }
})

// const {increment, decrement} = counterStore.actions
export const counterActions = counterStore.actions

const store = configureStore({
    reducer: {
        anotherCounter: counterStore.reducer
    }
})

export default store


