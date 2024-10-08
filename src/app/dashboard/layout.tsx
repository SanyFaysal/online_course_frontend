
'use client'
import React, { useEffect, useState } from 'react';

import { Avatar, Breadcrumb, Dropdown, Layout, Menu, MenuProps, theme } from 'antd';
import { dashboardMenuItems } from '@/lib/dashboardSideMenuOptions';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import { PiGearSix, PiSignOutLight, PiUserCircle } from 'react-icons/pi';
import { BiDownArrow } from 'react-icons/bi';
import { FaAngleDown } from 'react-icons/fa';
import { getFromLocalStorage, removeFromLocalStorage } from '@/utils/local-storage';
import { accessToken } from '@/constants/storageKey';
import { fetchUser, fetchUserByRole, logoutUser } from '@/redux/slices/userSlice';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { IoMenuOutline } from 'react-icons/io5';
import ResponsiveDrawer from '@/components/dashboard/dashboard_ui/ResponsiveDrawer';
import Loading from '../loading';


const { Header, Content, Footer, Sider } = Layout;



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const token = getFromLocalStorage(accessToken)
    const path = usePathname();
    const dispatch = useAppDispatch()
    const router = useRouter();
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)
    const { user, isLoading, isSuccess }: any = useAppSelector(state => state.auth)
    const all: any = useAppSelector(state => state.auth)

    const [collapsed, setCollapsed] = useState(false);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();


    const handleLogout = () => {
        removeFromLocalStorage(accessToken);
        dispatch(logoutUser())
        router.push('/')
    }

    useEffect(() => {
        //@ts-ignore
        dispatch(fetchUser(token));
    }, [token])

    const items: MenuProps['items'] = [
        {
            label: <div className='flex flex-col justify-center items-center cursor-pointer  pb-2'>
                <Avatar style={{ backgroundColor: '#217eff' }} className='w-16 h-16'>{user?.name?.slice(0, 1)}</Avatar>
                <h1 className='capitalize mt-1 font-semibold'>{user?.name}</h1>
                <p className='text-xs'>{user?.mobile_number}</p>
                <div className='flex flex-col  text-start  my-2 w-full '>
                    <Link href={`/dashboard/profile/${user?.role}`} className='flex gap-1 text-sm items-center hover:bg-blue-500 p-2 rounded hover:text-white'><PiUserCircle className='text-lg' />My Profile</Link>
                    <div onClick={handleLogout} className='flex gap-1 cursor-pointer text-sm items-center hover:bg-blue-500 p-2 rounded hover:text-white'><PiSignOutLight className='text-lg' />Sign out</div>
                </div>
            </div>,
            key: '0',
        },

    ];

    if (isLoading) {
        return <><Loading /></>
    }

    if (!isLoading && !isSuccess) {
        return <div className='h-screen w-screen flex flex-col justify-center items-center '>
            <p>You are not authorized</p>
            <Link href='/'>Go to home</Link>
        </div>
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className='hidden lg:block'>
                <Link href={'/'} className=" text-white my-5 block text-center sticky top-7">Logo </Link>
                <Menu className=' sticky top-16' theme="dark" defaultSelectedKeys={[path]} mode="inline" items={dashboardMenuItems(user?.role)} />
            </Sider>
            <ResponsiveDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} path={path} />
            <Layout>
                <Header style={{ padding: '0px 25px', background: colorBgContainer }} className='flex justify-between w-full items-center pr-[-10px] sticky top-0'>
                    <div className='lg:hidden block '>
                        <IoMenuOutline onClick={() => setOpenDrawer(true)} className='text-xl' />
                    </div>
                    <p className='text-xl capitalize'>{user?.role} {" "}Dashboard</p>
                    <Dropdown menu={{ items }} trigger={['click']}>
                        <div onClick={(e) => e.preventDefault()}>
                            <div className='flex justify-between items-center gap-1  h-12 px-2 py-2 rounded'>
                                <Avatar style={{ backgroundColor: '#217eff' }}>{user?.firstName?.slice(0, 1)}</Avatar>
                                <div>
                                    <div className='flex items-center gap-4 '>
                                        <div className='lg:flex hidden flex-col items-start justify-center'>
                                            <p className='lg:mb-[-45px] font-semibold'>{user?.firstName}</p>
                                            <p className='font-semibold capitalize '>{user?.role}</p>
                                        </div>
                                        <FaAngleDown />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Dropdown>
                </Header>
                <Content style={{ margin: '10px 16px' }} className='bg-white p-5 rounded'>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

