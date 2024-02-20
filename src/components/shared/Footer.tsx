import { LocateIcon, Phone } from "lucide-react";
import { AiFillInstagram } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaPhone, FaYoutube } from "react-icons/fa";
import { MdEmail, MdOutlineEmail, MdPhone } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";
import Link from "next/link";
export default function Footer() {
    return (
        <footer className=" bg-gray-100 py-8 lg:px-16 px-6 ">

            <div className="flex lg:flex-row flex-col gap-5  justify-around ">

                <div className="px-">
                    <h5 className="text-lg font-semibold mb-2">Logo</h5>
                    <p>Online Educational Platform</p>
                </div>


                <div className="">
                    <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
                    <div className="flex flex-col gap-2">
                        <Link href='/become-instructor'><TbPointFilled className="inline  text-sm text-gray-500" />Become an Instructor</Link>
                        <Link href='/auth/register'><TbPointFilled className="inline  text-sm text-gray-500" />Register as a Student</Link>


                    </div>
                </div>


                <div className="">
                    <h5 className="text-lg font-semibold mb-2">Contact </h5>
                    <ul className="flex flex-col gap-2">
                        <p>   <MdOutlineEmail className="inline" /> softmax@gmail.com</p>
                        <p>  <MdPhone className="inline " /> 01635485544</p>
                        <p><CiLocationOn className="text-xl inline" /> Duet, Gazipur, Dhaka Bangladesh</p>
                    </ul>
                </div>


                <div className="">
                    <h5 className="text-lg font-semibold mb-2 sm:text-center lg:text-left">Stay connected</h5>
                    <div className="flex sm:justify-center lg:justify-start gap-5">
                        <FaFacebook className="text-xl" />
                        <FaYoutube className="text-xl" />
                        <AiFillInstagram className="text-xl" />
                    </div>
                </div>
            </div>



        </footer>
    )
}
