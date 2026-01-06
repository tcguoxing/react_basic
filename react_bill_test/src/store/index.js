import {configureStore} from "@reduxjs/toolkit";
import billReducer  from '@/store/modules/bill'

const store = configureStore({
    reducer: {
        bill: billReducer
    }
})


export default store

