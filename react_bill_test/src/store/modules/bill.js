import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
    name: 'billStore',
    initialState: {
        billList: []
    },
    reducers: {
        setBillList(state, action) {
            state.billList = action.payload
        }
    }
})

export const {setBillList} = billStore.actions

export function getBillData()  { // 异步action需要有个dispatch，
    const func = function (dispatch) {
        return new Promise((resolve) => {
            axios.get('http://localhost:8888/ka').then(res => {
                console.log('dispatch res: ', res)
                dispatch(setBillList(res.data))
                resolve(res.data)
            })
        })
    }
    return func
}
export default billStore.reducer
