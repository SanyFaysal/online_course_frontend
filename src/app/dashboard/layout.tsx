
'use client'
import React, { useState } from 'react';

import { Avatar, Breadcrumb, Dropdown, Layout, Menu, MenuProps, theme } from 'antd';
import { dashboardMenuItems } from '@/constants/dashboardSideMenuOptions';
import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import { PiGearSix, PiSignOutLight, PiUserCircle } from 'react-icons/pi';
import { BiDownArrow } from 'react-icons/bi';
import { FaAngleDown } from 'react-icons/fa';


const { Header, Content, Footer, Sider } = Layout;



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const { user } = useAppSelector(state => state.auth)
    const items: MenuProps['items'] = [
        {
            label: <div className='flex flex-col justify-center items-center cursor-pointer  pb-2'>
                <Avatar style={{ backgroundColor: '#217eff' }} className='w-16 h-16'>{user?.name?.slice(0, 1)}</Avatar>
                <h1 className='capitalize mt-1 font-semibold'>{user?.name}</h1>
                <p className='text-xs'>{user?.mobile_number}</p>
                <div className='flex flex-col  text-start  my-2 w-full '>
                    <Link href={'/dashboard/profile/account'} className='flex gap-1 text-sm items-center hover:bg-blue-500 p-2 rounded hover:text-white'><PiUserCircle className='text-lg' />My Profile</Link>
                    <div className='flex gap-1 cursor-pointer text-sm items-center hover:bg-blue-500 p-2 rounded hover:text-white'><PiSignOutLight className='text-lg' />Sign out</div>
                </div>
            </div>,
            key: '0',
        },

    ];
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className=" text-white my-7 text-center">Logo </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={dashboardMenuItems(user?.role)} />
            </Sider>
            <Layout>
                <Header style={{ padding: '0px 25px', background: colorBgContainer }} className='flex justify-between w-full items-center pr-[-10px]'>
                    <p className='text-xl capitalize'>{user?.role} {" "}Dashboard</p>
                    <Dropdown menu={{ items }} trigger={['click']}>
                        <div onClick={(e) => e.preventDefault()}>
                            <div className='flex justify-between items-center gap-1 bg-gray-100 h-12 px-2 py-2 rounded'>

                                <Avatar style={{ backgroundColor: '#217eff' }}>{user?.name?.slice(0, 1)}</Avatar>
                                <div>
                                    <div className='flex items-center gap-4 '>
                                        <div className='flex flex-col items-start justify-center'>
                                            <p className='mb-[-45px] font-semibold'>{user?.name}</p>
                                            <p className='font-semibold'>{user?.role}</p>
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

