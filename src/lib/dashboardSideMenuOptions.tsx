'use client'

import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Link from 'next/link';
import { CiHome } from 'react-icons/ci';
import { RxDashboard } from 'react-icons/rx';
import { USER_ROLE } from '../constants/role';


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}


const studentItems = [
    getItem(<Link href={'/dashboard/student/home'}>Home</Link>, '/dashboard/student/home', <CiHome />),
    getItem(<Link href={'/dashboard/student/my-courses'}>My Courses</Link>, '/dashboard/student/my-courses', <RxDashboard />),
]

const teacherItems = [
    getItem(<Link href={'/dashboard/teacher/home'}>Home</Link>, '/dashboard/teacher/home', <CiHome />),
    getItem(<Link href={'/dashboard/teacher/create-course'}>Create Course</Link>, '/dashboard/teacher/create-course', <CiHome />),
]
const adminItems = [
    getItem(<Link href={'/dashboard/admin/home'}>Home</Link>, '1', <CiHome />),
    getItem('Teacher', '/dashboard/admin/teacher', <UserOutlined />, [
        getItem('All Teachers', '/dashboard/admin/all-teacher'),
        getItem('Teachers Request', '/dashboard/admin/teacher-request'),
    ]),
    getItem('Categories', '/dashboard/admin/categories', <UserOutlined />, [
        getItem('All Categories', '/dashboard/admin/all-categories'),
        getItem('Add Category', '/dashboard/admin/add-category'),
    ]),
]


export const dashboardMenuItems: any = (role: string) => {

    const items: MenuItem[] =
        role === USER_ROLE.STUDENT ? studentItems :
            role === USER_ROLE.TEACHER ? teacherItems :
                role === USER_ROLE.ADMIN ? adminItems :
                    [];

    return items;
}


