import BlogGrid from "../components/Home/BlogGrid"
import LeftSidebar from "../components/Home/LeftSidebar"


const Home = () => {
  return (
    <main class="wrapper">
      <LeftSidebar />
      <BlogGrid />
    </main>
  )
}

export default Home