
'use client'
import React, { useState } from 'react';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { items } from '@/constants/dashboardSideMenuOptions';

const { Header, Content, Footer, Sider } = Layout;



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();



    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '10px 16px' }} className='bg-white p-5 rounded'>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

