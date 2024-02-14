import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { FaGraduationCap, FaUsers } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";

export default function Banner() {
    return (
        <div className="m-0 p-0 bg-slate-50">
            <div className="grid grid-cols-2 mx-16 my-0 py-5">
                <Image className="banner_vector_world absolute left-0 top-[80px]" src={'/assets/vectors/bshape_01.png'} width={50} height={100} alt="vector" />
                <div className="my-auto">
                    <Image className=" absolute left-[35%] " src={'/assets/vectors/bshape_02.png'} width={40} height={100} alt="vector" />
                    <p className="bg-blue-50 mb-3 text-blue-500 font-semibold w-fit px-3 rounded text-xl">100% Satisfaction Guarantee</p>
                    <h3 className=" text-5xl text-blue-900 font-bold">Learn <span className="text-blue-500">Skills</span> From
                        <br /> Our Top Instructors</h3>
                    <p className="my-7 text-lg text-slate-500">Borem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattisBorem ipsum dolor sit amet consectetur adipiscing area we followelit.</p>
                    <div className="flex gap-x-8 items-center">
                        <button className="text-white  bg-blue-500 px-5 py-4 rounded text-lg flex gap-3 items-center">Explore Courses  <BsArrowRight className="mt-1" /></button>
                        <div className="flex gap-x-3 items-center">
                            <LuPhoneCall className="text-4xl text-blue-500" />
                            <div>
                                <p className="text-slate-500 font-medium">Have any query ? </p>
                                <p className="text-2xl font-semibold  text-blue-900">880123456</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div>
                        <div className="bg-white shadow px-6 top-48 pb-4 rounded-xl text-center absolute flex flex-col justify-center items-center">
                            <span className="bg-purple-500 p-3 w-fit  mt-[-25px]  rounded-full">
                                <FaUsers className="text-3xl  text-white " />
                            </span>
                            <h1 className=" w-full my-1">Total Students</h1>
                            <h1 className="text-3xl font-bold text-blue-900 ">15K</h1>
                        </div>
                        <div className="shadow-lg px-6 right-14 bottom-20 bg-white pb-4 rounded-lg text-center absolute flex flex-col justify-center items-center">
                            <span className="bg-green-500 p-3 w-fit  mt-[-25px]  rounded-full">
                                <FaGraduationCap className="text-3xl  text-white " />
                            </span>
                            <h1 className="w-full my-1">Total Graduates</h1>
                            <h1 className="text-3xl font-bold text-blue-900 ">8k</h1>
                        </div>
                        <Image src={'/assets/banner_img.png'} height={700} width={500} alt="banner_img" />
                    </div>
                </div>
            </div>
        </div>
    )
}
