'use client'
import CourseCardForTeacher from "@/components/dashboard/dashboard_ui/CourseCardForTeacher";
import CommonSectionTitle from "@/components/ui/CommonSectionTitle";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useGetAllCoursesQuery } from "@/redux/api/courseApi";


export default function OurCourses() {

    const courses = [
        {
            title: 'Demo Course',
        },
        {
            title: 'Demo Course',
        },
        {
            title: 'Demo Course',
        },
        {
            title: 'Demo Course',
        },
        {
            title: 'Demo Course',
        },
        {
            title: 'Demo Course',
        },
        {
            title: 'Demo Course',
        },
        {
            title: 'Demo Course',
        },
        {
            title: 'Demo Course',
        },
        {
            title: 'Demo Course',
        },

    ]
    return (
        <div className="my-20 lg:px-16 px-6">
            <CommonSectionTitle subTitle="10,000+ Unique Online Courses" title_1="The Courses We" highlight="Featured" />

            <Carousel className="w-full max-w-full my-4">
                <CarouselContent className="">
                    {courses?.map((course, index) => (
                        <CarouselItem key={index} className="lg:pl-3 pl-1 basis-1/2 sm:basis-1/2  md:basis-1/2 lg:basis-1/5">
                            <CourseCardForTeacher course={course} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
