'use client'

import CourseCardForTeacher from "@/components/dashboard/dashboard_ui/CourseCardForTeacher";
import EnrolledCourseCard from "@/components/dashboard/dashboard_ui/EnrolledCourseCard";
import { accessToken } from "@/constants/storageKey";
// import { useGetTeacherCoursesQuery } from "@/redux/api/teacherApi";
import { useAppSelector } from "@/redux/hooks";
import { getFromLocalStorage } from "@/utils/local-storage";

export default function TeacherDashboardHome() {
    const { user, userByRole }: any = useAppSelector(state => state.auth);
    const token = getFromLocalStorage(accessToken);
    const { data }: any = {}

    return (
        <div>
            <h1 className="text-xl mb-3">My Courses</h1>
            <div className="grid lg:grid-cols-5 grid-cols-2 gap-3">
                {data?.courses?.map((course: any) => <CourseCardForTeacher key={course?.id} course={course} />)}
            </div>

        </div>
    )
}
