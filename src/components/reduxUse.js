import {createStore} from "redux";
import { createSlice, configureStore } from '@reduxjs/toolkit'
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {counterActions} from "../store";


export default function () {
//     const [count, setCount] = useState(0)
//     // 其实，干了这么久不明白，为什么要用状态机，不能直接给值吗？
//     function reducer(state = {count: 0}, action) {
//         // 数据不可变：基于原始状态生成一个新的状态
//         if(action.type === 'ADD') {
//             console.log('add count： ', state.count)
//             return {count: state.count + 1}
//         }
//         if(action.type=== 'MINUS') {
//             console.log('minus count： ', state.count)
//             return {count: state.count - 1}
//         }
//         return state
//     }
//
// //
//     const store = createStore(reducer)
//
//     store.subscribe(() => {
//         console.log('state变化了')
//         console.log('store state: ', store.getState().count)
//         const newValue = store.getState().count
//         // setCount(newValue)
//     })
//
//     const addClick = function() {
//         store.dispatch({
//             type: 'ADD'
//         })
//     }
//
//     const minusClick = function() {
//         store.dispatch({
//             type: 'MINUS'
//         })
//     }
    const {count} = useSelector(state => state.anotherCounter)
    const dispatch = useDispatch()
    return <span>
        <button onClick={() => dispatch(counterActions.increment())}>ADD</button>
        <button onClick={() => dispatch(counterActions.increment(20))}>ADD20</button>
        {count}
        <button onClick={() => dispatch(counterActions.decrement())}>MINUS</button>
    </span>
}
