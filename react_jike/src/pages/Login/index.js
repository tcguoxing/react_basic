import './index.scss'
import { Card, Form, Input, Button, message } from 'antd'
import logo from '@/assets/logo.png'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchToken } from "@/store/modules/token";


const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

  const onFinish = async (values) => {
      console.log(values)
      values.password = process.env.REACT_APP_PWD
      await dispatch(fetchToken(values))
      navigate('/layout')
      // 进入登录页；
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form onFinish={onFinish} validateTrigger="onBlur">
          <Form.Item
            name="username"
            // 多条校验逻辑 先校验第一条 第一条通过之后再校验第二条
            rules={[
              {
                required: true, // 校验逻辑
                message: '请输入用户名',
              },
            ]}>
            <Input size="large" placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
            ]}>
            <Input size="large" placeholder="请输入密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login