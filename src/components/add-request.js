import React, {useContext} from 'react'
import {Form, Input, Button, DatePicker} from 'antd'
import {ContactContext} from "./store"

const AddRequest = ({setCurrentUser, currentUser}) => {
    const [state, dispatch] = useContext(ContactContext)

    function onFinishAddRequest(notes){
        let data = [...currentUser.notes, notes]

        setCurrentUser(prevState=>({...prevState, notes: data}))

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
            name="basic"
            initialValues={{remember: true}}
            layout="vertical"
            requiredMark={false}
            onFinish={onFinishAddRequest}
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