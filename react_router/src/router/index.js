import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Article from "../page/Article";
import Login from '../page/Login'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        title: 'router'
    },
    {
        path: '/login/:id',
        element: <Login/>
    },
    {
        path: '/article',
        element: <Article/>
    },
])

export default router