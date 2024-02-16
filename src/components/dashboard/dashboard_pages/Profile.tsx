'use client'

import { USER_ROLE } from "@/constants/role";
import { useAppSelector } from "@/redux/hooks"
import { formatDate, formatTime } from "@/utils/formatDate";
import { Avatar } from "antd";
import Image from "next/image";

export default function Profile() {
    const { userByRole, user } = useAppSelector(state => state.auth);

    return (
        <div>
            <div className='flex flex-col justify-between items-center gap-1  px-2 py-2 rounded'>
                <div>
                    <Image src={'/assets/vectors/blank.webp'} height={100} width={100} alt="profile" className="bg-gray-200 p-4 rounded-full opacity-50" />
                </div>
                <div>
                    <div className='flex flex-col items-center  '>
                        <div className='grid grid-cols-2 gap-x-5 gap-y-1 '>

                            <p className="col-span-2 text-center font-semibold text-lg">Personal Information</p>
                            <p className="text-end">Name : </p>
                            <p className=' font-semibold'>{user?.name}</p>
                            <p className="text-end">Role : </p>
                            <p className=' font-semibold capitalize'>{user?.role}</p>
                            <p className="text-end">Phone Number : </p>
                            <p className=' font-semibold'>{user?.mobile_number}</p>
                            <p className="text-end">Email : </p>
                            <p className=' font-semibold'>{`${user?.email}`}</p>
                            <p className="text-end">Account created at  : </p>
                            <p className=' font-semibold'>{formatDate(user?.created_at)} {" at "} {formatTime(user?.created_at)}</p>

                            {
                                user?.role === USER_ROLE.TEACHER && <>
                                    <p className="col-span-2 text-center font-semibold text-lg capitalize">{user?.role}'s Information</p>

                                    {Object?.keys(userByRole)?.map(key => <>
                                        <p className="text-end capitalize">{key} : </p>
                                        <p className=' font-semibold capitalize'>{`${userByRole[key]}`}</p>
                                    </>)}

                                </>

                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
