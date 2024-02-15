'use client'

import { Button, Checkbox, Form, Input } from 'antd'
import Image from 'next/image';
import React from 'react'


type FieldType = {
    mobile_number?: string;
    name?: string;
    password?: string;
    password2?: string;
};
export default function StudentRegistration() {


    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='w-full grid grid-cols-2 '>

            <div className='mx-auto bg-red-500 w-full h-screen'>
                <Image src={'/assets/vectors/register_vector.png'} width={500} height={200} alt='register_vector' />
            </div>
            <div className='my-auto'>
                <Form
                    name="basic"
                    labelWrap
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout='vertical'
                    className='w-[70%]  mx-auto'
                >
                    <Form.Item<FieldType>
                        label="name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="mobile_number"
                        name="mobile_number"
                        rules={[{ required: true, message: 'Please input your mobile number!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Retype password"
                        name="password2"
                        rules={[{ required: true, message: 'Please retype your password' }]}
                    >
                        <Input.Password />
                    </Form.Item>


                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div >
    )
}
