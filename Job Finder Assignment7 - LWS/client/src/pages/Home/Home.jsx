import AllAviableJobs from '../../components/AllAviableJobs'
import Sidebar from '../../components/Sidebar'

const Home = () => {
  return (
    <main className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 mt-20">
      <Sidebar />
      <AllAviableJobs />
    </main>
  )
}

export default Home