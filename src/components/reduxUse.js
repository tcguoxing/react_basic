import {createStore} from "redux";
import { createSlice, configureStore } from '@reduxjs/toolkit'
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {counterActions} from "../store";
import {fetchPublicKey} from "../store";


export default function () {
    const {count} = useSelector(state => state.anotherCounter)
    const {list} = useSelector(state => state.channel)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPublicKey())
    }, [dispatch]);
    return <span>
        <button onClick={() => dispatch(counterActions.increment())}>ADD</button>
        <button onClick={() => dispatch(counterActions.increment(20))}>ADD20</button>
        {count}
        <button onClick={() => dispatch(counterActions.decrement())}>MINUS</button>
        <div>
            {list.map(e => <span key={e}>{e}+test</span>)}
        </div>
    </span>

}
