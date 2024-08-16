'use client'

import { accessToken } from "@/constants/storageKey"
import { useGetAllCategoriesQuery } from "@/redux/api/categoryApi";
import { useCreateCourseMutation, useGetAllCoursesQuery } from "@/redux/api/courseApi"
// import { useGetSingleTeacherQuery } from "@/redux/api/teacherApi";
import { useAppSelector } from "@/redux/hooks";
import { getFromLocalStorage } from "@/utils/local-storage"
import { Form, Input, Select, message } from "antd";

export default function CreateCourse() {
    const token = getFromLocalStorage(accessToken);
    const { user, userByRole } = useAppSelector(state => state.auth)
    const { data: categories }: any = useGetAllCategoriesQuery(token);
    const [createCourse] = useCreateCourseMutation()

    const handleCreateCourse = async (values: any) => {
        try {
            if (!user?.id) {
                return message.error('Please login')
            }


            const data = {
                title: values.title,
                category: values.category,
                teacher: [String(userByRole?.id)]
            };

            const res = await createCourse({ data, token })
            if (res) {
                message.success('Course created successful')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className=" rounded-lg p-5 bg-gray-100 ">
                <h1 className="text-xl mb-3 font-semibold text-gray-800">Create your Course</h1>

                <Form
                    name="basic"
                    labelWrap
                    initialValues={{ remember: true }}
                    onFinish={handleCreateCourse}
                    labelCol={{ flex: '25px' }}
                    autoComplete="off"
                    layout='vertical'
                    className='  mb-0 grid lg:grid-cols-5 gap-x-5 '
                >
                    <Form.Item label="Select" name="category" className="col-span-2">
                        <Select>
                            {categories?.map((category: any) => <Select.Option key={category?.id} value={category?.id}>{category?.name}</Select.Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item<any>
                        label="Course Title "
                        name="title"
                        className="col-span-2"
                        rules={[{ required: true, message: 'Please input course title' }]}
                    // style={{ marginBottom: '10px' }}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item className=" w-full col-span-1">
                        <button type='submit' className='w-[100%] px-3 text-white py-[5px] rounded mt-6 text-md bg-blue-500'>
                            Create Course
                        </button>

                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
