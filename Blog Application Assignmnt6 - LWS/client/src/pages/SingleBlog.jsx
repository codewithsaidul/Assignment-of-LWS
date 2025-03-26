import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { BlogDescripton } from "../components/SingleBlog/BlogDescripton";
import RelatedPosts from "../components/SingleBlog/RelatedPosts";

const SingleBlog = () => {
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
                <BlogDescripton />
            </div>

            {/* Related Post */}
            <div>
                <RelatedPosts />
            </div>
      </main>
    </div>
  );
};

export default SingleBlog;
