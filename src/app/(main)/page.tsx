import Banner from "@/components/pages/home_components/Banner";
import DiscoverInstructors from "@/components/pages/home_components/DiscoverInstructors";
import JoinNewsletters from "@/components/pages/home_components/JoinNewsletters";
import JoinUs from "@/components/pages/home_components/JoinUs";
import OurInstructors from "@/components/pages/home_components/MeetOurInstructors";
import OurCourses from "@/components/pages/home_components/OurCourses";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
    return (
        <main >

            <Banner />
            <DiscoverInstructors />
            <OurCourses />
            <JoinUs />
            <OurInstructors />
            <JoinNewsletters />
        </main>
    )
}