import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { BsArrowRight } from "react-icons/bs";
import { GoSignIn } from "react-icons/go";
import { IoMdLogIn } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
const items = new Array(3).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
}));

export default function Navbar() {
    return (
        <div className="text-blue-950 font-medium flex justify-between sticky top-0 py-4 z-10 backdrop-blur-md  lg:px-16 px-6 ">
            <p>Logo</p>
            <div className="lg:flex hidden gap-8">
                <p className="flex gap-1 items-center"> <LuLayoutDashboard className="text-xl" />Dashboard</p>
                <p className="flex gap-1 items-center ">Sign In <IoMdLogIn className="text-xl" /></p>
            </div>
            <div className="flex lg:hidden gap-5">
                <p><LuLayoutDashboard className="text-2xl" /></p>
                <p><IoMdLogIn className="text-2xl" /></p>
            </div>
        </div>

    )
}
