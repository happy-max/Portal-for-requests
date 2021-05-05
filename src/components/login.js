import React, {useContext} from 'react'
import {Form, Input, Button} from 'antd'
import {useHistory} from 'react-router-dom'
import { ContactContext } from './store'

const Login = ({ setIsLoggedIn, setCurrentUser}) => {
    let history = useHistory()
    const [state, dispatch] = useContext(ContactContext)

    const onFinishLogin = (e) => {
        const data = state.contacts.find(({email, password}) => email === e.email
            && password === e.password)

        if (data) {
            setIsLoggedIn(true)
            setCurrentUser(data)
            history.push("/")
        } else {
            alert('Please check your email and password')
        }
    }
    return (
        <Form
            name="basic"
            initialValues={{remember: true}}
            layout="vertical"
            requiredMark={false}
            onFinish={onFinishLogin}
            size='large'
        >
            <h2>Login</h2>
            <Form.Item
                label="Email"
                name="email"
                rules={[{
                    required: true, type: 'email', validateTrigger: 'onSubmit'
                }]}
            >
                <Input placeholder="Email"
                       maxLength={30}/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{
                    required: true, validateTrigger: 'onSubmit'
                }]}
            >
                <Input.Password placeholder="Password" maxLength={30}/>
            </Form.Item>

            <Form.Item style={{textAlign: 'center'}}>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>

        </Form>
    )
}
export default Login