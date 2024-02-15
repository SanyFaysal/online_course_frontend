import Banner from "@/components/pages/home_components/Banner";
import DiscoverInstructors from "@/components/pages/home_components/DiscoverInstructors";
import OurCourses from "@/components/pages/home_components/OurCourses";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
    return (
        <main >

            <Banner />
            <DiscoverInstructors />
            <OurCourses />
        </main>
    )
}