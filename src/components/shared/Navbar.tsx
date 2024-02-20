'use client'
import { accessToken } from "@/constants/storageKey";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutUser } from "@/redux/slices/userSlice";
import { removeFromLocalStorage } from "@/utils/local-storage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";


export default function Navbar() {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(state => state.auth)

    const handleLogout = () => {
        console.log({ clicked: true })
        removeFromLocalStorage(accessToken);
        dispatch(logoutUser())
    }

    return (
        <div className="text-blue-950 font-medium flex justify-between sticky top-0 py-4 z-10 backdrop-blur-md  lg:px-16 px-6 ">
            <p>Logo</p>
            <div className="lg:flex hidden gap-8">
                <Link href={`/become-instructor`} className="flex gap-1 items-center">Become an Instructor</Link>
                {
                    user?.id ? <>
                        <Link href={`/dashboard/${user?.role}/home`} className="flex gap-1 items-center"> Dashboard</Link>
                        <p onClick={handleLogout} className="flex gap-1 items-center cursor-pointer">Sign out </p>
                    </> : <>
                        <Link href={'/auth/registration'} className="flex gap-1 items-center ">Register as Student </Link>
                        <Link href={'/auth/signin'} className="flex gap-1 items-center ">Sign In </Link>

                    </>
                }
            </div>
            <div className="flex lg:hidden gap-5">



                {
                    user?.id ? <>
                        <Link href={`/dashboard/${user?.role}/home`} className="flex gap-1 items-center text-xl"> <LuLayoutDashboard /></Link>
                        <p onClick={handleLogout} className="flex gap-1 items-center cursor-pointer text-xl"><FaSignOutAlt /> </p>
                    </> : <>
                        <Link href={'/auth/registration'} className="flex gap-1 items-center ">Register as Student </Link>
                        <Link href={'/auth/signin'} className="flex gap-1 items-center ">Signin </Link>

                    </>
                }
                {/* <p><LuLayoutDashboard className="text-2xl" /></p>
                <p><IoMdLogIn className="text-2xl" /></p> */}
            </div>
        </div>

    )
}
