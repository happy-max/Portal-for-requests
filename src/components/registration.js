import React, {useState} from 'react'
import {Form, Input, Button, DatePicker, AutoComplete} from 'antd'

const Registration = () => {
    const [result, setResult] = useState([])

    const handleSearch = (value) => {
        let res = []
        if (!value || value.indexOf('@') >= 0) {
            res = []
        } else {
            res = ['gmail.com', 'mail.ru', 'qq.com'].map((domain) => `${value}@${domain}`)
        }
        setResult(res)
    }
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
            <h2>Registration</h2>
            <Form.Item
                label="Email"
                name="Email"
                rules={[{
                    required: true, type: 'email', validateTrigger: 'onSubmit'
                }]}
            >
                <AutoComplete
                    onSearch={handleSearch}
                    placeholder="Email"
                    maxLength={30}
                >
                    {result.map((email) => (
                        <AutoComplete.Option key={email} value={email} >
                            {email}
                        </AutoComplete.Option>
                    ))}
                </AutoComplete>
                {/*<Input />*/}
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{
                    required: true, min: 8, validateTrigger: 'onSubmit'
                }]}
            >
                <Input.Password maxLength={30} placeholder="Password"/>
            </Form.Item>

            <Form.Item name="DatePicker" label="DatePicker"
                       rules={[
                           {
                               type: 'object',
                               required: true,
                               message: 'Please select time!',
                               validateTrigger: 'onSubmit'
                           }
                       ]}
            >
                <DatePicker/>
            </Form.Item>

            <Form.Item style={{textAlign: 'center'}}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>

        </Form>
    )
}
export default Registration