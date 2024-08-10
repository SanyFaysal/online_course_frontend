'use client'

import { accessToken } from '@/constants/storageKey';
import { useCreateStudentMutation } from '@/redux/api/userApi';
import { useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/slices/userSlice';
import { IStudent } from '@/types/studentTypes';
import { setToLocalStorage } from '@/utils/local-storage';
import { showErrorModal } from '@/utils/showError';
import { Form, Input, message, Segmented } from 'antd'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs';



export default function StudentRegistration() {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const [role, setRole] = useState("Student")
    const [createStudent] = useCreateStudentMutation()

    const onFinish = async (values: any) => {
        try {
            values.role = 'user'
            const res: any = await createStudent(values).unwrap();

            if (res?.data?._id) {
                message.success('Registration Successful')
                setToLocalStorage(accessToken, res?.token)
                dispatch(setUser(res?.data))
                router.push(`/`)
            }
        } catch (error: any) {
            console.log(error)
            // showErrorModal(error?.data?.errors)
        }
    };


    return (
        <div className='w-full grid lg:grid-cols-2 gap-5'>

            <div className='mx-auto lg:bg-gray-200 w-full lg:h-screen h-fit flex flex-col justify-center '>
                <Link href={'/'} className='flex items-center ml-5 gap-1 my-5 lg:my-0'><BsArrowLeft />Back to Home</Link>
                <Image src={'/assets/vectors/register_vector.png'} width={500} height={200} alt='register_vector' className='mx-auto hidden lg:block' />
            </div>
            <div className=' w-full flex flex-col justify-center items-center'>
                <div className='w-full px-16'>
                    <h1 className='text-3xl  font-semibold text-slate-800 mb-8'>Register as    <span className='text-blue-500'>Student</span> </h1>

                    <Form
                        name="basic"
                        labelWrap
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        labelCol={{ flex: '25px' }}
                        autoComplete="off"
                        layout='vertical'
                        className='grid grid-cols-2 gap-x-3 w-full  mx-auto mb-0'
                    >
                        <Form.Item<IStudent>
                            label="First Name"
                            name="firstName"
                            className='col-span-1'
                            rules={[{ required: true, message: 'Please input your name' }]}
                            style={{ marginBottom: '15px' }}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item<IStudent>
                            label="Last Name"
                            name="lastName"
                            className='col-span-1'
                            rules={[{ required: true, message: 'Please input your name' }]}
                            style={{ marginBottom: '15px' }}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<IStudent>
                            label="Email"
                            name="email"
                            className='col-span-1'
                            rules={[{ required: true, message: 'Please input your email!' }]}
                            style={{ marginBottom: '15px' }}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item<IStudent>
                            label="Phone number"
                            name="phoneNumber"
                            className='col-span-1'
                            rules={[{ required: true, message: 'Please input your Phone number!' }]}
                            style={{ marginBottom: '15px' }}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item<IStudent>
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password' }]}
                            style={{ marginBottom: '15px' }}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item<IStudent>
                            label="Confirm password"
                            name="password2"
                            rules={[{ required: true, message: 'Please confirm your password' }]}
                            style={{ marginBottom: '15px' }}
                        >
                            <Input.Password />
                        </Form.Item>


                        <Form.Item className='col-span-2'>
                            <button type='submit' className='w-full text-white py-2 rounded mt-2 text-md bg-blue-500'>
                                Register your Account
                            </button>

                        </Form.Item>
                    </Form>
                </div>


                <div>
                    <h2 className='text-center '>Already have an account ? <Link href={'/auth/signin'} className='text-blue-500'>Sign in</Link></h2>
                </div>
            </div>
        </div >
    )
}
