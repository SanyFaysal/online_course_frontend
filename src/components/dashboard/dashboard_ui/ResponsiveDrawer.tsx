'use client'
import { dashboardMenuItems } from "@/lib/dashboardSideMenuOptions";
import { useAppSelector } from "@/redux/hooks";
import { Button, Drawer, Menu, Space } from "antd";


export default function ResponsiveDrawer({ openDrawer, setOpenDrawer, path }: any) {
    const { user } = useAppSelector(state => state.auth)
    const showDrawer = () => {
        setOpenDrawer(true);
    };

    const onClose = () => {
        setOpenDrawer(false);
    };


    return (
        <Drawer
            title="Dashboard Menu"
            // style={{ background: '#061325e7' }}
            width={300}
            extra={
                <Space>
                    <Button onClick={onClose}>Close</Button>

                </Space>
            }
            closable={false}
            onClose={onClose}
            placement="left"
            open={openDrawer}
            className="bg-[#061325e7]"
        >
            <Menu className=' sticky' theme="light" defaultSelectedKeys={[path]} mode="inline" items={dashboardMenuItems(user?.role)} />
        </Drawer>
    )
}

