import Banner from '@/components/pages/home_components/Banner'
import DiscoverInstructors from '@/components/pages/home_components/DiscoverInstructors'
import Navbar from '@/components/shared/Navbar'



export default function Home() {
  return (
    <main >
      <Navbar />
      <Banner />
      <DiscoverInstructors />
    </main>
  )
}
