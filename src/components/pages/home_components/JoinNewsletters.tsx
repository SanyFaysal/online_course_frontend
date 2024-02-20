import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

export default function JoinNewsletters() {
    return (
        <div className="lg:px-16 py-8 bg-slate-200  lg:grid lg:grid-cols-5 grid-cols-1 rounded gap-5">
            <div className="flex lg:flex-row flex-col justify-center gap-10 items-center col-span-3 ">
                <Image src={'/assets/vectors/newsletter.png'} width={250} height={100} alt="vector" className=" " />
                <h1 className="text-2xl font-semibold lg:text-start text-center ">
                    Let’s Join To
                    <br />
                    Our Newsletters
                </h1>
            </div>

            <div className="flex justify-end col-span-2 items-center lg:mt-0 mt-5  lg:mx-0 mx-6 ">
                <div className="w-full flex">
                    <input type="text" className="border-0 px-5 py-3 w-[100%] rounded-full focus:outline-none text-blue-600 " />
                    <button className="bg-blue-600 px-3 py-3 rounded-full  border-none  absolute lg:right-16  right-6  text-white">Subscribe</button>
                </div>
            </div>
        </div>
    )
}
