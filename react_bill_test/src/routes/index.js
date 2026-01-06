import {createBrowserRouter} from "react-router-dom";
import Layout from "@/pages/Layout";
import Month from "@/pages/Month";
import Year from "@/pages/Year";

const routes = createBrowserRouter([
    {
        path: '/new',
        element: <div>新建记录</div>
    },
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Month/>
            },
            {
                path: 'year',
                element: <Year/>
            }
        ]
    },
    {
        path: '*',
        element: <div>404页面</div>
    }
])

export default routes


