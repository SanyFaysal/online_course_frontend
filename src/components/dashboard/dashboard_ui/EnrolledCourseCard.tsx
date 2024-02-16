import { accessToken } from "@/constants/storageKey";
import { useEnrollCourseMutation } from "@/redux/api/courseApi";
import { useAppSelector } from "@/redux/hooks";
import { IEnrollStudent } from "@/types/studentTypes";
import { getFromLocalStorage } from "@/utils/local-storage";
import { message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EnrolledCourseCard({ course }: any) {


    return (
        <div className="bg-gray-100 rounded-lg  ">
            <div className="">
                <Image src={'/assets/vectors/blank_1.webp'} width={200} height={50} alt="course img" className=" mx-auto h-[80%]  rounded-lg" />
            </div>
            <div className="px-3 py-2 mt-[-25px] z-[999]">
                <h1 className="text-sm font-semibold  min-h-10">{course?.title}</h1>
                <div className="flex justify-end">
                    <button className="bg-purple-200 text-purple-500  duration-300 px-3 py-1 rounded ">Continue</button>
                </div>
            </div>
        </div>
    )
}
