"use client"

import { useGetAllUsersQuery } from "@/redux/api/userApi";
import { Button, Dropdown, MenuProps, Switch, Table } from "antd";
import { MoreOutlined, DownOutlined } from "@ant-design/icons"

export default function ManageUsersTable() {
    const { data }: any = useGetAllUsersQuery(null)
    const dataSource: any = data?.data
    const roleItems: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <button>Make Admin</button>
            ),
        },
        {
            key: '2',
            label: (
                <button>Make Instructor</button>
            ),
        },
    ]
    const statusItems: MenuProps['items'] = [
        {
            key: 'active',
            label: (
                <button>Active</button>
            ),
        },
        {
            key: 'block',
            label: (
                <button>Block</button>
            ),
        },
    ]
    const columns = [
        {
            title: 'Full Name',
            dataIndex: 'fullName',
            render: (_: any, user: any) => {
                console.log(user)
                return <>
                    <p>{user?.firstName}  {user?.lastName} </p>
                </>
            }
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
            title: 'Role ',
            dataIndex: 'role',
            render: (_: any, user: any) => <Dropdown menu={{ items: roleItems }} placement="bottomLeft" arrow>
                <button className="uppercase">{user?.role}   <DownOutlined className=" ml-1 " /></button>
            </Dropdown>
        },
        {
            title: 'Action ',
            dataIndex: 'action',
            render: (_: any, user: any) => <Switch className="bg-gray-500 " checkedChildren="Active" unCheckedChildren="Blocked" defaultChecked autoFocus={true} />
        },
    ];
    console.log(data)
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}
