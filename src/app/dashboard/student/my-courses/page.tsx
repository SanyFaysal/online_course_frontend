'use client'
import CourseCard from "@/components/dashboard/dashboard_ui/CourseCard";
import EnrolledCourseCard from "@/components/dashboard/dashboard_ui/EnrolledCourseCard";
import { accessToken } from "@/constants/storageKey"
import { useGetStudentCoursesQuery } from "@/redux/api/courseApi";
import { useAppSelector } from "@/redux/hooks";
import { getFromLocalStorage } from "@/utils/local-storage"

export default function MyCourses() {
    const { user } = useAppSelector(state => state.auth)
    const token = getFromLocalStorage(accessToken);

    const { data }: any = useGetStudentCoursesQuery({ token, studentId: user?.id });

    return (
        <div>
            <h1 className="text-xl mb-3">My Courses</h1>
            <div className="grid lg:grid-cols-5 grid-cols-2 gap-3">
                {data?.student_courses?.map((course: any) => <EnrolledCourseCard key={course?.id} course={course} />)}
            </div>
        </div>
    )
}
