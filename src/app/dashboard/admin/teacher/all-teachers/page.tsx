
'use client'
import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { formatDate } from '@/utils/formatDate';
import { useGetAllTeacherRequestsQuery } from '@/redux/api/teacherApi';
import { filterTeacher } from '@/utils/filterTeacher';
import Link from 'next/link';



const columns: TableProps<any>['columns'] = [
    {
        title: 'Full Name',
        dataIndex: 'fullName',
        key: 'name',
        render: (text) => <p>{text}</p>,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Phone Number',
        dataIndex: 'phone_number',
        key: 'phone_number',
    },
    {
        title: 'Created At',
        key: 'created_at',

        render: (_, { created_at }) => (
            <>
                <p>{formatDate(created_at)}</p>
            </>
        ),
    },
    {
        title: 'Approved Status',
        dataIndex: 'approved_as_teacher',
        render: (_, record) => (
            <Space size="middle">
                <p className='capitalize  px-3 '>{`${record?.approved_as_teacher}`}</p>
            </Space>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Link href={''}>Details</Link>

            </Space>
        ),
    },
];
export default function AllTeachers() {
    const { data }: any = useGetAllTeacherRequestsQuery(undefined)
    const teachers = filterTeacher(data, false)
    return (
        <div>
            <h1 className='text-xl mb-2'>All Teachers</h1>
            <Table columns={columns} dataSource={teachers as []} className='overflow-x-auto' />
        </div>
    )
};

