import { faBookBookmark, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { fetchUpdateBlogAsync } from "../../features/Blog/blogSlice";
// import { fetchUpdateBlogAsync } from "../../features/update/updateBlogSlice";

export const BlogDescripton = ({ blog }) => {
  const { id, title, image, tags, likes, isSaved, description } = blog;
  const dispatch = useDispatch();

  const handleLikes = () => {
    const updateBlog = {
      id,
      likes: likes + 1,
    };

    dispatch(fetchUpdateBlogAsync(updateBlog));
  };

  const handleStatus = () => {
    const updateBlog = {
      id,
      isSaved: !isSaved
    };
    
    dispatch(fetchUpdateBlogAsync(updateBlog))
  };

  return (
    <div>
      <img
        src={image}
        alt="githum"
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tags.map((tag, i) => (
            <span key={i}>#{tag},</span>
          ))}
        </div>
        <div className="btn-group">
          {/* <!-- handle like on button click --> */}
          <button
            onClick={handleLikes}
            className="like-btn"
            id="lws-singleLinks"
          >
            <FontAwesomeIcon icon={faThumbsUp} />
            <span className="ml-1.5">{likes}</span>
          </button>
          {/* <!-- handle save on button click --> */}
          {/* <!-- use ".active" className and "Saved" text  if a post is saved, other wise "Save" --> */}
          <button
            onClick={handleStatus}
            className={`${isSaved && "active"} save-btn`}
            id="lws-singleSavedBtn"
          >
            <FontAwesomeIcon icon={faBookBookmark} />{" "}
            <span className="ml-1.5">{isSaved ? "Saved" : "Save"}</span>
          </button>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
