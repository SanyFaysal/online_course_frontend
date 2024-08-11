
'use client'
import React from 'react';
import { Button, Space, Table, Tag, Tooltip } from 'antd';
import type { TableProps } from 'antd';
import { formatDate } from '@/utils/formatDate';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'
import { filterTeacher } from '@/utils/filterTeacher';
import Link from 'next/link';
import { useGetAllInstructorRequestsQuery } from '@/redux/api/instructorApi';




export default function TeacherRequests() {
    const { data }: any = useGetAllInstructorRequestsQuery(undefined)
    const allData = data?.data;
    const handleApproveTeacher = (teacherId: string) => {
        console.log({ teacherId })
    }

    const columns: TableProps<any>['columns'] = [
        {
            title: 'FullName',
            render: (user) => <p>{user?.firstName} {user?.lastName}</p>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Cv/Resume',

            render: (_: any, user: any) => <Button type="link"><a href={user?.cv_resume}>CV/Resume Link</a></Button>,
        },
        {
            title: 'Details',

            render: (_: any, { details }: any) => <Tooltip color="#504135" placement="topLeft" title={details} >
                See Details
            </Tooltip>,
        },

        {
            title: 'Requested At',
            key: 'created_at',

            render: (_, { createdAt }) => (
                <>
                    <p>{formatDate(createdAt)}</p>
                </>
            ),
        },
        {
            title: 'Request',
            key: 'request',

            render: (_, { status }) => (
                <>
                    <button className={`capitalize px-2 rounded-full bg-gray-200 `}>{status}</button>
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',

            render: (_, { status }) => (
                <div className='flex gap-2'>
                    <Button className='text-blue-500 hover:text-green-500 hover:border-[1px] hover:border-green-500'><CheckOutlined /></Button>
                    <Button danger ><CloseOutlined /></Button>
                </div>
            ),
        },

    ];
    return (
        <div>
            <h1 className='text-xl mb-2'>All Teachers Requests</h1>
            <Table columns={columns} dataSource={allData as []} className='overflow-x-auto' />
        </div>
    )
};

