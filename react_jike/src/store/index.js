import {configureStore} from "@reduxjs/toolkit";
import userStore from './modules/user'
import tokenStore from './modules/token'
export default configureStore({
    reducer: {
        user: userStore,
        token:tokenStore,
    }
})
