import Image from 'next/image'
import React from 'react'

export default function CourseCardForTeacher({ course }: any) {
    return (<div className="bg-gray-100 rounded-lg  ">
        <div className="">
            <Image src={'/assets/vectors/blank_1.webp'} width={200} height={50} alt="course img" className=" mx-auto h-[80%]  rounded-lg" />
        </div>
        <div className="px-3 py-2 mt-[-25px] z-[999]">
            <h1 className="text-sm font-semibold  min-h-10">{course?.title}</h1>
            <div className="flex justify-end">
                <button className="bg-blue-500 text-white  duration-300 px-3 py-1 rounded ">Details</button>
            </div>
        </div>
    </div>

    )
}
