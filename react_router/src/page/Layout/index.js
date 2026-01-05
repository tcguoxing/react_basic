import {Outlet, Link, useNavigate} from "react-router-dom";

export default () => {
    const navigate = useNavigate()
    return <div>
        我是一级路由
        {/*配置二级路由的出口，地址一定是全地址*/}
        <Link to='/layout' >转到面板</Link>
        <button onClick={() => navigate('/layout/about')} >前往关于页</button>
        {/*为了显示二级路由的页面，Outlet*/}
        <Outlet />
    </div>
}