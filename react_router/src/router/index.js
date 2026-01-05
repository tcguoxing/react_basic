import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Article from "../page/Article";
import Login from '../page/Login'
import Layout from "../page/Layout";
import Board from "../page/Board";
import About from "../page/About";
import NotFound from "../page/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        title: 'router'
    },
    {
        path: '/login/:id/:name',
        element: <Login/>
    },
    {
        path: '/article',
        element: <Article/>
    },
    {
        path: '/layout',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Board/>
            },
            {
                path: 'about',
                element: <About/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router