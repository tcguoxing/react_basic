import {createStore} from "redux";
import Redux from 'redux'
import {useState} from "react";



export default function () {
    const [count, setCount] = useState(0)
    // 其实，干了这么久不明白，为什么要用状态机，不能直接给值吗？
    function reducer(state = {count: 0}, action) {
        // 数据不可变：基于原始状态生成一个新的状态
        if(action.type == 'ADD') {
            return {count: state.count + 1}
        }
        if(action.type=='MINUS') {
            return {count: state.count - 1}
        }
        return state
    }

//
    const store = createStore(reducer)

    store.subscribe(() => {
        console.log('state变化了')
        console.log('store state: ', store.getState())
        setCount(store.getState().count)
    })

    const addClick = function() {
        store.dispatch({
            type: 'ADD'
        })
    }

    const minusClick = function() {
        store.dispatch({
            type: 'MINUS'
        })
    }
    return <span>
        <button onClick={addClick}>ADD</button>
        {count}
        <button onClick={minusClick}>MINUS</button>
    </span>
}
