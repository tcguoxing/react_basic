import {createSlice} from "@reduxjs/toolkit";

const channelStore = createSlice({
    name:'channel',
    initialState: {
        list: []
    },
    reducers:{
      getInfo(state, action) {
          const {payload} = action
          state.list = [payload]
      }
    }
})

export const channelActions = channelStore.actions

export default channelStore
