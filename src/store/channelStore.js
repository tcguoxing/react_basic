import {configureStore, createSlice} from "@reduxjs/toolkit";

const channelStore = createSlice({
    name:'channel',
    initialState: {
        list: []
    },
    reducers:{

    }
})

export const channelActions = channelStore.actions

const store = configureStore({
    reducer: {
        channel: channelStore.reducer
    }
})

export default store
