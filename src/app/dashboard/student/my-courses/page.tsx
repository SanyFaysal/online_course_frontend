'use client'
import CourseCard from "@/components/dashboard/dashboard_ui/CourseCard";
import EnrolledCourseCard from "@/components/dashboard/dashboard_ui/EnrolledCourseCard";
import { accessToken } from "@/constants/storageKey"
import { useGetAllCoursesQuery } from "@/redux/api/courseApi";
import { getFromLocalStorage } from "@/utils/local-storage"

export default function MyCourses() {
    const token = getFromLocalStorage(accessToken);
    const { data }: any = useGetAllCoursesQuery(token);

    return (
        <div>
            <h1 className="text-xl mb-3">My Courses</h1>
            <div className="grid lg:grid-cols-5 grid-cols-2 gap-3">
                {data?.map((course: any) => <EnrolledCourseCard key={course?.id} course={course} />)}
            </div>

        </div>
    )
}
