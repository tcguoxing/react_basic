import {Link, useParams} from "react-router-dom";

export default () => {
    const params = useParams() // 需要在router.index里加上:id
    let id = params.id
    console.log('id: ', id)

    return <div>
        这是登录页
        <Link to='/article?id=21332131&name=wangzi'>
            声明式跳转
        </Link>
        中间分隔符
        <a href='/article'>直接a标签也能跳，但慢了。</a>
    </div>
}