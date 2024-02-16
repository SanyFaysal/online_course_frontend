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
import { USER_ROLE } from './role';


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
    getItem(<Link href={'/dashboard/home'}>Home</Link>, '1', <CiHome />),
    getItem(<Link href={'/my-courses'}>My Courses</Link>, '2', <RxDashboard />),
]

const teacherItems = [
    getItem(<Link href={'/home'}>Home</Link>, '1', <CiHome />),
    getItem(<Link href={'/create-course'}>Create Course</Link>, '2', <CiHome />),
]
const adminItems = [
    getItem(<Link href={'/home'}>Home</Link>, '1', <CiHome />),
    getItem('Teacher', 'sub1', <UserOutlined />, [
        getItem('All Teachers', '3'),
        getItem('Teachers Request', '4'),
    ]),
    getItem('Categories', 'sub1', <UserOutlined />, [
        getItem('All Categories', '3'),
        getItem('Add Category', '4'),
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


