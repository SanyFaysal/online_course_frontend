'use client'

import { useCreateTeacherRequestMutation } from "@/redux/api/teacherApi";
import { Breadcrumb, Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";

export default function BecomeInstructor() {
    const [createRequest] = useCreateTeacherRequestMutation();
    const handleSubmitRequest = async (values: any) => {
        try {
            console.log(values)
            // const res: any = await createRequest(values).unwrap()
            // if (res?.id) {
            //     message.success("Request sent")
            // }
        } catch (error: any) {
            message.error(error?.data?.phone_number[0])
        }
    }
    return (
        <div className="h-full">
            <div className="becomeInstructor   py-8  relative  overflow-hidden backdrop-filter:blur(4px)">


                <Image src={'/assets/vectors/bshape_01.png'} width={50} height={100} alt="vector"
                    className="absolute left-[15px]  top-16 opacity-20" />

                <div className="grid grid-cols-2  w-full  ">
                    <div className="flex flex-col justify-start  items-start text-start  lg:pl-10 pt-20">
                        <h1 className="text-3xl">Become an <span className="text-blue-500 font-semibold">Instructor</span></h1>
                        <h1 className="text-3xl font-semibold">Join Our Teaching Community</h1>
                        <p className="mb-2 mt-5">Share your expertise, inspire learners, and make a difference. Fill out the form to request to become an instructor.</p>

                        <p className="mb-6 mt-1 "><span className="font-bold">Apply: </span>Fill out the form to request to become an instructor. Our team will review your application and get back to you soon.</p>
                    </div>



                    <div className=" lg:mx-16   mx-2 lg:my-6 my-0 rounded-lg px-5 pt-8   bg-blue-50 ">

                        <Form
                            name="basic"
                            labelWrap
                            initialValues={{ remember: true }}
                            onFinish={handleSubmitRequest}
                            labelCol={{ flex: '25px' }}
                            autoComplete="off"
                            layout='vertical'
                            className='  mb-0 lg:grid lg:grid-cols-2 grid-cols-1 gap-x-5  '
                        >
                            <Form.Item<any>
                                label="First Name"
                                name="firstName"
                                className="w-full "
                                rules={[{ required: true, message: 'Please input your Full name' }]}
                            // style={{ marginBottom: '10px' }}
                            >
                                <Input className="py-2 w-full" />
                            </Form.Item>
                            <Form.Item<any>
                                label="Last Name"
                                name="lastName"
                                className="w-full "
                                rules={[{ required: true, message: 'Please input your Full name' }]}
                            // style={{ marginBottom: '10px' }}
                            >
                                <Input className="py-2 w-full" />
                            </Form.Item>
                            <Form.Item<any>
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Please input your email' }]}
                            // style={{ marginBottom: '10px' }}
                            >
                                <Input className="py-2" />
                            </Form.Item>
                            <Form.Item<any>
                                label="Phone Number"
                                name="phoneNumber"
                                rules={[{ required: true, message: 'Please input your phone number' }]}
                            // style={{ marginBottom: '10px' }}
                            >
                                <Input className="py-2" />
                            </Form.Item>

                            <Form.Item<any>
                                label="CV/Resume link"
                                name="cv_resume"
                                className="col-span-2"
                                rules={[{ required: true, message: 'Please input your Cv/Resume link ' }]}
                            // style={{ marginBottom: '10px' }}
                            >
                                <Input className="py-2" />
                            </Form.Item>

                            <Form.Item<any>
                                label="Description(Optional)"
                                name="description"
                                className="col-span-2"
                                rules={[{ required: false, message: 'Please input your Biodata' }]}
                            // style={{ marginBottom: '10px' }}
                            >
                                <TextArea />
                            </Form.Item>
                            <Form.Item className="col-span-2 flex justify-end">
                                <button type='submit' className='w-fit px-3 py-2 text-white py-1 rounded  text-md bg-blue-500'>
                                    Send Request
                                </button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>


            </div>
        </div>
    )
}
