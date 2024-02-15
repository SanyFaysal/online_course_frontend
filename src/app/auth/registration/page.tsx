'use client'

import { useCreateStudentMutation } from '@/redux/api/studentApi';
import { IStudent } from '@/types/studentTypes';
import { showErrorModal } from '@/utils/showError';
import { Button, Checkbox, Form, Input, message } from 'antd'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';



export default function StudentRegistration() {
    const router = useRouter()
    const [createStudent] = useCreateStudentMutation()

    const onFinish = async (values: any) => {
        try {
            const res = await createStudent(values).unwrap();
            if (res?.user?.id) {
                message.success('Registration Successful')
                router.push(`/dashboard/${res?.user?.role}`)
            }
        } catch (error: any) {
            showErrorModal(error?.data?.errors)
        }
    };


    return (
        <div className='w-full grid grid-cols-2 gap-5'>

            <div className='mx-auto bg-gray-200 w-full h-screen flex flex-col justify-center '>
                <Link href={'/'} className='flex items-center ml-5 gap-1 '><BsArrowLeft />Back to Home</Link>
                <Image src={'/assets/vectors/register_vector.png'} width={500} height={200} alt='register_vector' className='mx-auto' />
            </div>
            <div className='my-auto flex flex-col justify-start items-center'>
                <div className='mb-8 text-center'>
                    <h1 className='text-4xl mb-2 font-semibold text-slate-800'>Student Register</h1>
                    <p className='text-gray-500'>Join our community by creating your account.</p>
                </div>
                <Form
                    name="basic"
                    labelWrap
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    labelCol={{ flex: '25px' }}
                    autoComplete="off"
                    layout='vertical'
                    className='w-[70%]  mx-auto mb-0'
                >
                    <Form.Item<IStudent>
                        label="Name"
                        name="name"

                        rules={[{ required: true, message: 'Please input your name' }]}
                        style={{ marginBottom: '10px' }}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<IStudent>
                        label="Mobile Number"
                        name="mobile_number"
                        rules={[{ required: true, message: 'Please input your mobile number!' }]}
                        style={{ marginBottom: '10px' }}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<IStudent>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password' }]}
                        style={{ marginBottom: '10px' }}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item<IStudent>
                        label="Confirm password"
                        name="password2"
                        rules={[{ required: true, message: 'Please confirm your password' }]}
                        style={{ marginBottom: '10px' }}
                    >
                        <Input.Password />
                    </Form.Item>


                    <Form.Item>
                        <button type='submit' className='w-full text-white py-2 rounded mt-2 text-md bg-blue-500'>
                            Register your Account
                        </button>

                    </Form.Item>
                </Form>

                <div>
                    <h2 className='text-center '>Already have an account ? <Link href={'/signin'} className='text-blue-500'>Sign in</Link></h2>
                </div>
            </div>
        </div >
    )
}
