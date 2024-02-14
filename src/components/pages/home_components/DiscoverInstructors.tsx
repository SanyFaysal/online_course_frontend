import AboutUsCard from "@/components/ui/AboutUsCard";
import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { GiGraduateCap } from "react-icons/gi";
import { GoVideo } from "react-icons/go";
import { MdOutlinePlayLesson } from "react-icons/md";

export default function DiscoverInstructors() {
    return (
        <div className="px-16 grid grid-cols-2 mt-20">
            <div className="flex relative gap-2">

                <div>
                    <div className="bg-blue-500 text-white rounded-lg p-5 mt-14 ml-4">
                        <h3 className="text-3xl font-semibold ">12+ </h3>
                        <p>Years of <br /> Experiences</p>
                    </div>
                    <div className="absolute bottom-5">
                        <Image
                            className=""
                            src={'/assets/images/about_img02.png'} alt="aboutImg" width={200} height={100} />
                    </div>
                </div>
                <div>
                    <Image
                        className=""
                        src={'/assets/images/about_img01.png'} alt="aboutImg" width={350} height={100} />

                </div>
            </div>
            <div>
                <p className="bg-blue-100 mb-3 text-blue-500 font-semibold w-fit px-3 rounded text-lg">Get To Know About Us</p>
                <h3 className=" text-4xl text-blue-900 font-bold">Discover Top<span className="text-blue-500 mx-3">Instructors</span>
                    <br />Around The World</h3>
                <p className="my-5 text-lg text-slate-500">Borem ipsum dolor sit amet, consectetur adipiscing eliawe awUt elit ellus, luctus nec ullamcorper mattisBorem ipsum dolor awes atnse awctetur adipis we followelit. Borem.</p>
                <div className="grid grid-cols-2 gap-5">
                    <AboutUsCard icon={<BiSupport className=" " />} title="2000+" subTitle="Expert Turors" color='blue' />
                    <AboutUsCard icon={<MdOutlinePlayLesson className=" " />} title="1200+" subTitle="Top Lesson" color='green' />
                    <AboutUsCard icon={<GoVideo className=" " />} title="2000+" subTitle="Video Support" color='orange' />
                    <AboutUsCard icon={<GiGraduateCap className=" " />} title="1800+" subTitle="Graduate Students" color='purple' />

                </div>
                <button className="text-white  bg-blue-500 px-5 py-2 mt-5 rounded text-lg flex gap-3 items-center">Discover More  <BsArrowRight className="mt-1" /></button>
            </div>
        </div>
    )
}
