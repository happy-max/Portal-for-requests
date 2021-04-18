import React from 'react'
import {Form, Input, Button} from 'antd'

const AddRequest = () => {
    return (
        <Form
            name="basic"
            initialValues={{remember: true}}
            layout="vertical"
            requiredMark={false}
            // onFinish={onFinish}
            size='large'
        >
            <h2>Add request</h2>
            <Form.Item
                label="Theme"
                name="Theme"
                rules={[{
                    required: true,  validateTrigger: 'onSubmit'
                }]}
            >
                <Input placeholder="theme"
                       maxLength={30}/>
            </Form.Item>

            <Form.Item
                label="Description"
                name="Description"
                rules={[{
                    required: true, validateTrigger: 'onSubmit'
                }]}
            >
                <Input placeholder="description" maxLength={30}/>
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