import {useNavigate} from "react-router-dom";
import {useSearchParams} from "react-router-dom";

export default () => {
    const navigate = useNavigate()
    const [params] = useSearchParams()
    let id = params.get('id')
    let name = params.get('name')
    console.log('id: ', id)
    console.log('name: ', name)
    return <div>我是文章页
        <button onClick={() => navigate('/login/1100/wanggang')}>
            编程式导航，返回登录页
        </button>
    </div>
}