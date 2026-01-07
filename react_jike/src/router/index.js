import {createBrowserRouter} from "react-router-dom";
import App from "@/App";
import Login from "@/pages/Login";
import Layout from "@/pages/Layout";

export default createBrowserRouter([
    {path: '/', element: <App/>},
    {path: '/about', element:<div>这是About页</div>},
    {path: '/login', element: <Login/>},
    {path: '/layout', element: <Layout/>}
])
