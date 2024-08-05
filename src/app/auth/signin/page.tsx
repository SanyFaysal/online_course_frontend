'use client'

import { accessToken } from '@/constants/storageKey';
import { useCreateStudentMutation, useLoginUserMutation } from '@/redux/api/userApi';
import { useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/slices/userSlice';
import { IStudent } from '@/types/studentTypes';
import { setToLocalStorage } from '@/utils/local-storage';
import { showErrorModal } from '@/utils/showError';
import { Form, Input, message } from 'antd'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';



export default function Signin() {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const [loginUser] = useLoginUserMutation()

    const handleLogin = async (values: any) => {
        console.log(values)
        // try {
        //     const res: any = await loginUser(values).unwrap();
        //     if (res) {
        //         message.success(res?.msg)
        //         setToLocalStorage(accessToken, res?.token?.access)
        //         dispatch(setUser(res?.user))
        //         router.push(`/dashboard/${res?.user?.role}/home`)
        //     }
        // } catch (error: any) {
        //     showErrorModal(error?.data?.errors)
        // }
    };


    return (
        <div className='w-full grid lg:grid-cols-2 gap-5'>

            <div className='mx-auto lg:bg-gray-200 w-full lg:h-screen h-fit flex  flex-col justify-center '>
                <Link href={'/'} className='flex items-center ml-5 gap-1 lg:my-0 my-5'><BsArrowLeft />Back to Home</Link>
                <Image src={'/assets/vectors/register_vector.png'} width={500} height={200} alt='register_vector' className='mx-auto lg:block hidden' />
            </div>
            <div className='my-auto flex flex-col lg:justify-center lg:mt-26 mt-14 h-[70vh] items-center'>
                <div className='mb-8 text-center'>
                    <h1 className='text-4xl mb-2 font-semibold text-slate-800'>Login</h1>
                    <p className='text-gray-500'>Join our community by login your account.</p>
                </div>
                <Form
                    name="basic"
                    labelWrap
                    initialValues={{ remember: true }}
                    onFinish={handleLogin}
                    labelCol={{ flex: '25px' }}
                    autoComplete="off"
                    layout='vertical'
                    className='lg:w-[70%] w-[90%]  mx-auto mb-0'
                >
                    <Form.Item<Partial<IStudent>>
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email' }]}
                    // style={{ marginBottom: '10px' }}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<Partial<IStudent>>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password' }]}
                    // style={{ marginBottom: '10px' }}
                    >
                        <Input.Password />
                    </Form.Item>


                    <Form.Item>
                        <button type='submit' className='w-full text-white py-2 rounded mt-2 text-md bg-blue-500'>
                            Signin to your Account
                        </button>

                    </Form.Item>
                </Form>

                <div>
                    <h2 className='text-center '>Don't have any account ? <Link href={'/auth/registration'} className='text-blue-500'>Sign up</Link></h2>
                </div>
            </div>
        </div >
    )
}
