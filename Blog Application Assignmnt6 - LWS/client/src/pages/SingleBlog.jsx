import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { BlogDescripton } from "../components/SingleBlog/BlogDescripton";
import RelatedPosts from "../components/SingleBlog/RelatedPosts";
import Loading from "../components/ui/Loading";
import { fetchBlogAsync } from "../features/Blog/blogSlice";

const SingleBlog = () => {
  const { blogId } = useParams()
  const dispatch = useDispatch()
  const { blog, isLoading, isError, error } = useSelector(state => state.blog)

  useEffect(() => {
    dispatch(fetchBlogAsync(blogId))
  }, [blogId, dispatch])


  if (isLoading) return <Loading />

  if (!isLoading && isError) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-210px)]">
        <p className="text-4xl font-bold text-red-600">{error}</p>
      </div>
    )
  }


  if (!isLoading && !isError && Object.keys(blog).length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-210px)]">
        <p className="text-4xl font-bold text-gray-500">Blogs Not Found!</p>
      </div>
    )
  }


  return (
    <div>
      {/* <!-- Go Home / Go Back --> */}
      <div className="container mt-8">
        <Link
          to="/"
          className="inline-block text-gray-600 home-btn"
          id="lws-goHome"
        >
            <FontAwesomeIcon icon={faHouse} />
            <span className="ml-1.5">Go Home</span>
        </Link>
      </div>


      {/* ================= Main Content of Details Page ================= */}
      <main className="post-page-container">
            {/* Details of Blog */}
            <div className="post">
                <BlogDescripton blog={blog} />
            </div>

            {/* Related Post */}
            <div>
                <RelatedPosts id={blog.id} tags={blog.tags} />
            </div>
      </main>
    </div>
  );
};

export default SingleBlog;
