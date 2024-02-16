
'use client'
import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { formatDate } from '@/utils/formatDate';
import { useGetAllTeacherRequestsQuery } from '@/redux/api/teacherApi';



const columns: TableProps<any>['columns'] = [
    {
        title: 'Full Name',
        dataIndex: 'fullName',
        key: 'name',
        render: (text) => <a>{text}</a>,
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
                <p className='capitalize'>{`${record?.approved_as_teacher}`}</p>
            </Space>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];
export default function AllTeachers() {
    const { data } = useGetAllTeacherRequestsQuery(undefined)
    return (
        <Table columns={columns} dataSource={data as []} />
    )
};

