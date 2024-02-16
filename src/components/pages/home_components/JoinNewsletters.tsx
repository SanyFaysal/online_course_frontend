import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

export default function JoinNewsletters() {
    return (
        <div className="px-16 py-8 bg-slate-200  grid grid-cols-5  rounded ">
            <div className="flex gap-10 items-center col-span-3">
                <Image src={'/assets/vectors/newsletter.png'} width={250} height={100} alt="vector" className=" " />
                <h1 className="text-2xl font-semibold">
                    Let’s Join To
                    <br />
                    Our Newsletters
                </h1>
            </div>

            <div className="flex justify-end col-span-2 items-center">
                <div className="w-full flex ">
                    <input type="text" className="border-0 px-5 py-3 w-[100%] rounded-full focus:outline-none text-blue-600 " />
                    <button className="bg-blue-600 px-3 py-3 rounded-full  border-none  absolute right-16  text-white">Subscribe</button>
                </div>
            </div>
        </div>
    )
}
