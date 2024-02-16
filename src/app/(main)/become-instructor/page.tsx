'use client'

import { useCreateTeacherRequestMutation } from "@/redux/api/teacherApi";
import { Breadcrumb, Form, Input, message } from "antd";
import Image from "next/image";

export default function BecomeInstructor() {
    const [createRequest] = useCreateTeacherRequestMutation();
    const handleSubmitRequest = async (values: any) => {
        try {
            const res: any = await createRequest(values).unwrap()
            if (res?.id) {
                message.success("Request sent")
            }
        } catch (error: any) {
            message.error(error?.data?.phone_number[0])
        }
    }
    return (
        <div className="h-full">
            <div className="bg-blue-600 py-20 relative text-white overflow-hidden">
                <Image src={'/assets/vectors/bshape_01.png'} width={50} height={100} alt="vector"
                    className="absolute  left-[60%] top-8 opacity-50" />
                <Image src={'/assets/vectors/cta_shape01.svg'} width={200} height={100} alt="vector"
                    className="absolute left-[-75px]  top-0 opacity-10" />
                <Image src={'/assets/vectors/cta_shape01.svg'} width={200} height={100} alt="vector"
                    className="absolute right-[-75px]  top-0 opacity-10" />
                <h1 className="text-3xl text-center ">Become an Instructor</h1>
                <Breadcrumb
                    className="flex justify-center text-slate-200"
                    separator={<p className="text-slate-200">/</p>}
                    items={[
                        {
                            title: <p className="text-slate-200">Home</p>,
                        },
                        {
                            title: <p className="text-slate-200">Become Instructor</p>,

                        },

                    ]}
                />
            </div>
            <div className=" mx-16 my-6 rounded-lg p-5 bg-slate-100 ">
                <h1 className="text-3xl font-semibold text-gray-800">Be a Part of Us</h1>
                <p className="mb-6">Fill up the form and send us a request</p>
                <Form
                    name="basic"
                    labelWrap
                    initialValues={{ remember: true }}
                    onFinish={handleSubmitRequest}
                    labelCol={{ flex: '25px' }}
                    autoComplete="off"
                    layout='vertical'
                    className='  mb-0 grid grid-cols-3 gap-x-5 '
                >
                    <Form.Item<any>
                        label="Full Name"
                        name="fullName"
                        className=""
                        rules={[{ required: true, message: 'Please input your Full name' }]}
                    // style={{ marginBottom: '10px' }}
                    >
                        <Input className="py-2" />
                    </Form.Item>
                    <Form.Item<any>
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email' }]}
                    // style={{ marginBottom: '10px' }}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<any>
                        label="Phone Number"
                        name="phone_number"
                        rules={[{ required: true, message: 'Please input your phone number' }]}
                    // style={{ marginBottom: '10px' }}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item className="col-span-3 flex justify-end">
                        <button type='submit' className='w-fit px-3 py-2 text-white py-1 rounded  text-md bg-blue-500'>
                            Send Request
                        </button>

                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
