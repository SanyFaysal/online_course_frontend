
'use client'
import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { formatDate } from '@/utils/formatDate';
import { useGetAllTeacherRequestsQuery } from '@/redux/api/teacherApi';
import { filterTeacher } from '@/utils/filterTeacher';
import Link from 'next/link';
import { useGetAllCategoriesQuery } from '@/redux/api/categoryApi';
import { getFromLocalStorage } from '@/utils/local-storage';
import { accessToken } from '@/constants/storageKey';
import { FaDeleteLeft, FaPencil } from 'react-icons/fa6';
import { FaCross } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';



const columns: TableProps<any>['columns'] = [
    {
        title: 'Category Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <p>{text}</p>,
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },


    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle" className='flex items-center'>
                <button className='bg-blue-100 hover:text-white hover:bg-blue-500 duration-300 p-2 rounded text-blue-500 '><FaPencil /></button>
                <button className='bg-red-100  hover:text-white hover:bg-red-500 duration-300 p-2 rounded text-red-500 '><RiDeleteBin6Line /></button>
            </Space>
        ),
    },
];
export default function AllCategories() {
    const token = getFromLocalStorage(accessToken)
    const { data }: any = useGetAllCategoriesQuery(token)
    // const teachers = filterTeacher(data, false)
    return (
        <div>
            <h1 className='text-xl mb-2'>All Categories</h1>
            <Table columns={columns} dataSource={data as []} />
        </div>
    )
};

