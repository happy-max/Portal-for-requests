import React from 'react'
import {Form, Input, Button, DatePicker} from 'antd'

const AddRequest = ({setCurrentUser, currentUser}) => {
    let [form] = Form.useForm()

    function onFinishAddRequest(notes){
        const {theme, description} = notes
        let date = new Date().toUTCString()
        let request = {theme, description, date}
        let data = [...currentUser.notes, request]
        setCurrentUser(prevState=>({...prevState, notes: data}))
        form.resetFields()

        let promise = new Promise(function(resolve, reject) {
            setTimeout(() => resolve("Your request added!"), 1000)
        })
        promise.then(
            result => alert(result),
            error => alert(error)
        )
    }

    return (
        <Form
            form={form}
            name="basic"
            layout="vertical"
            requiredMark={false}
            onFinish={onFinishAddRequest}
            size='large'

        >
            <h2>Add request</h2>
            <Form.Item
                label="Theme"
                name="theme"
                rules={[{
                    required: true,  validateTrigger: 'onSubmit'
                }]}
            >
                <Input placeholder="theme"
                       maxLength={30}/>
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[{
                    required: true, validateTrigger: 'onSubmit'
                }]}
            >
                <Input placeholder="description" maxLength={30}/>
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
                    Add request
                </Button>
            </Form.Item>

        </Form>
    )
}
export default AddRequest