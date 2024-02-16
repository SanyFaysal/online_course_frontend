'use client'


import CourseCard from "@/components/dashboard/dashboard_ui/CourseCard"
import { accessToken } from "@/constants/storageKey"
import { useGetAllCoursesQuery } from "@/redux/api/courseApi"
import { getFromLocalStorage } from "@/utils/local-storage"
import { useEffect, useState } from "react"


export default function HomePage() {
    const [courses, setCourses] = useState<any>([])
    const token = getFromLocalStorage(accessToken)
    const { data, isSuccess }: any = useGetAllCoursesQuery(token)
    useEffect(() => {
        setCourses(data)
    }, [data, isSuccess])


    return (
        <div>
            <h1 className="text-xl mb-2"> All Courses </h1>
            <div className="grid lg:grid-cols-5 grid-cols-2 gap-3">
                {courses?.map((course: any) => <CourseCard key={course?.id} course={course} />)}
            </div>

        </div>
    )
}
