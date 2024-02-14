import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
const items = new Array(3).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
}));

export default function Navbar() {
    return (
        <Header
            style={{
                border: 'none',
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                background: 'white'
            }}
        >
            <div className="demo-logo" />
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items}
                style={{ flex: 1, minWidth: 0 }}
            />
        </Header>
    )
}
