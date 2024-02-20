'use client'
import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useCreateCategoryMutation } from '@/redux/api/categoryApi';
import { getFromLocalStorage } from '@/utils/local-storage';
import { accessToken } from '@/constants/storageKey';

type FieldType = {
    name?: string;
    description?: string;
};
export default function AddCategory() {
    const token = getFromLocalStorage(accessToken)
    const [addCategory] = useCreateCategoryMutation()
    const onFinish = async (data: any) => {
        try {
            const res = await addCategory({ data, token });
            if (res) {
                message.success('Added Success')
            }
        } catch (error) {
            message.error('Something went wrong')
        }
    };



    return (
        <div>
            <h1 className='text-xl mb-4'>Add New Category</h1>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}

                initialValues={{ remember: true }}
                onFinish={onFinish}
                layout='vertical'
                className='lg:w-[60%]'
                autoComplete="off"

            >
                <Form.Item<FieldType>
                    label="Category Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input Category Name' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Category Description"
                    name="description"
                >
                    <TextArea />
                </Form.Item>



                <Form.Item>
                    <button className='px-3 py-2 bg-blue-600 text-white rounded '>

                        Add Category
                    </button>

                </Form.Item>
            </Form>
        </div>
    )
}

