import {createBrowserRouter} from "react-router-dom";
import App from "@/App";
import Login from "@/pages/Login";
import Layout from "@/pages/Layout";
import AuthRoute from "@/component/AuthRoute";
import Home from "@/pages/Home";
import Article from "@/pages/Article";
import Publish from "@/pages/Publish";

export default createBrowserRouter([
    {path: '/', element: <App/>},
    {path: '/about', element:<div>这是About页</div>},
    {path: '/login', element: <Login/>},
    {path: '/layout', element:
            <AuthRoute><Layout/></AuthRoute>,
        children:[
            {index: true, element: <Home/>},
            {path: 'article', element: <Article/>},
            {path: 'publish', element: <Publish/>},
        ]
    },
    {path: '*', element: <>404</>}
])
