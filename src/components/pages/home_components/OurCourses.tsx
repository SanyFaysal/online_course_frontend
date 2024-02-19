import CommonSectionTitle from "@/components/ui/CommonSectionTitle";
import { useGetAllCoursesQuery } from "@/redux/api/courseApi";

export default function OurCourses() {


    return (
        <div className="my-20 lg:px-16 px-6">
            <CommonSectionTitle subTitle="10,000+ Unique Online Courses" title_1="The Courses We" highlight="Featured" />
        </div>
    )
}
