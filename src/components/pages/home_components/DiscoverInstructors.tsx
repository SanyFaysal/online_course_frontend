import AboutUsCard from "@/components/ui/AboutUsCard";
import CommonSectionTitle from "@/components/ui/CommonSectionTitle";
import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import { GoVideo } from "react-icons/go";
import { MdOutlinePlayLesson } from "react-icons/md";

export default function DiscoverInstructors() {
    return (
        <div className="lg:px-16 px-6 grid lg:grid-cols-2 grid-cols-1 gap-10 lg:mt-20 mt-10">
            <div className="flex relative gap-2">
                <div>
                    <div className="bg-blue-500 text-white rounded-lg p-5 lg:mt-14 ml-4">
                        <h3 className="text-3xl font-semibold ">12+ </h3>
                        <p>Years of <br /> Experiences</p>
                    </div>
                    <div className="absolute bottom-5 lg:left-0 left-20 lg:w-[100%] w-[30%]">
                        <Image
                            className="about_img  "
                            src={'/assets/images/about_img02.png'} alt="aboutImg" width={220} height={100} />
                    </div>
                </div>
                <div>
                    <Image
                        className=""
                        src={'/assets/images/about_img01.png'} alt="aboutImg" width={380} height={100} />
                </div>
            </div>
            <div>
                <CommonSectionTitle subTitle="Get To Know About Us" title_1="Discover Top" highlight="Instructors" title_2="Around The World" />
                <p className="my-5 text-lg text-slate-500">Borem ipsum dolor sit amet, consectetur adipiscing eliawe awUt elit ellus, luctus nec ullamcorper mattisBorem ipsum dolor awes atnse awctetur adipis we followelit. Borem.</p>
                <div className="grid lg:grid-cols-2 lg:gap-5 gap-5">
                    <AboutUsCard icon={<BiSupport className=" " />} title="2000+" subTitle="Expert Turors" color='blue' />
                    <AboutUsCard icon={<MdOutlinePlayLesson className=" " />} title="1200+" subTitle="Top Lesson" color='green' />
                    <AboutUsCard icon={<GoVideo className=" " />} title="2000+" subTitle="Video Support" color='orange' />
                    <AboutUsCard icon={<GiGraduateCap className=" " />} title="1800+" subTitle="Graduate Students" color='purple' />

                </div>
                <button className="text-white  bg-blue-500 px-5 py-2 mt-8 rounded text-lg flex gap-3 items-center">Discover More  <BsArrowRight className="mt-1" /></button>
            </div>
        </div>
    )
}
