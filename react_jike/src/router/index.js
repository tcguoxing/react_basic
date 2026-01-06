import {createBrowserRouter} from "react-router-dom";
import App from "@/App";

export default createBrowserRouter([
    {path: '/', element: <App/>},
    {path: '/about', element:<div>这是About页</div>},

])
