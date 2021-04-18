import React from 'react'
import {Form, Input, Button} from 'antd'

const Login = () => {
    return (
        <Form
            name="basic"
            initialValues={{remember: true}}
            layout="vertical"
            requiredMark={false}
            // onFinish={onFinish}
            style={{
                width: '500px',
                borderRadius: '10px'
            }}
            size='large'
        >
            <h2>Login</h2>
            <Form.Item
                label="Email"
                name="Email"
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