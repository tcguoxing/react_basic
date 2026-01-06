import {Outlet, useNavigate, Link} from "react-router-dom";
import {Button} from "antd-mobile";

export default function () {
    const navigate = useNavigate()
    return <div>
        <Outlet/>
        这是一个Layout
        <Link to='/' >月度</Link>
        <button type='text' onClick={() => navigate('/year')} >年度</button>
        <button onClick={() => navigate('/new')}>新增</button>
        {/*测试全局生效样式*/}
        <Button color={"primary"}>测试全局</Button>
    </div>
}