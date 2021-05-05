import React, {useContext, useState} from 'react'
import {Form, Input, Button, DatePicker, AutoComplete} from 'antd'
import {useHistory} from "react-router-dom"
import {ContactContext} from './store'

const Registration = ({setIsLoggedIn, setCurrentUser}) => {
    const [result, setResult] = useState([])
    const [state, dispatch] = useContext(ContactContext)
    let history = useHistory()

    const handleSearch = (value) => {
        let res = []
        if (!value || value.indexOf('@') >= 0) {
            res = []
        } else {
            res = ['gmail.com', 'mail.ru', 'qq.com'].map((domain) => `${value}@${domain}`)
        }
        setResult(res)
    }

    const onFinishRegistration = (e) => {
        const data = state.contacts.find(({email}) => email === e.email)
        let value = {...e, notes: []}
        if (data) {
            alert('This Email already exists')
        } else {
            localStorage.setItem('allUsers', JSON.stringify([...state.contacts, value]))
            dispatch({
                type: "ADD_CONTACT",
                payload: value
            })

            setIsLoggedIn(true)
            setCurrentUser(value)
            history.push("/")
        }
    }

    return (
        <Form
            name="basic"
            initialValues={{remember: true}}
            layout="vertical"
            requiredMark={false}
            onFinish={onFinishRegistration}
            size='large'
        >
            <h2>Registration</h2>
            <Form.Item
                label="Email"
                name="email"
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
                        <AutoComplete.Option key={email} value={email}>
                            {email}
                        </AutoComplete.Option>
                    ))}
                </AutoComplete>
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

            <Form.Item style={{textAlign: 'center'}}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Registration