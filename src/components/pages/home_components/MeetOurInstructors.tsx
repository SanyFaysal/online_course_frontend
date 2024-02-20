'use client'
import CourseCardForTeacher from "@/components/dashboard/dashboard_ui/CourseCardForTeacher";
import CommonSectionTitle from "@/components/ui/CommonSectionTitle";
import InstructorsCard from "@/components/ui/InstructorsCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useGetAllCoursesQuery } from "@/redux/api/courseApi";


export default function OurInstructors() {

    const courses = [
        {
            name: 'Abu Sani Faysal',
            designation: 'Senior Software Engineer',
            img: '/assets/images/instructor_3.png',
        },
        {
            name: 'Abu Sani Faysal',
            designation: 'Senior Software Engineer',
            img: '/assets/images/instructor_1.png',
        },
        {
            name: 'Ahmad Kahafil',
            designation: 'Senior Software Engineer',
            img: '/assets/images/instructor_2.png',
        },
        {
            name: 'Abu Sani Faysal',
            designation: 'Senior Software Engineer',
            img: '/assets/images/instructor_3.png',
        },
        {
            name: 'Abu Sani Faysal',
            designation: 'Senior Software Engineer',
            img: '/assets/images/instructor_4.png',
        },


    ]
    return (
        <div className="my-20 lg:px-16 px-6">
            <CommonSectionTitle subTitle="Skilled Individuals" title_1="Meet All of ours" highlight="Instructors" />

            <Carousel className="w-full max-w-full my-4">
                <CarouselContent className="">
                    {courses?.map((course, index) => (
                        <CarouselItem key={index} className="lg:pl-3 pl-1 basis-1/1 sm:basis-1/1  md:basis-1/3 lg:basis-1/4">
                            <InstructorsCard instructor={course} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
