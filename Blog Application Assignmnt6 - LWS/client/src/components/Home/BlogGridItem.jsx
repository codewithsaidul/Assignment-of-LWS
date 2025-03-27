import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUpdateBlogAsync } from "../../features/Blog/blogSlice";
import { fetchBlogsAsync } from "../../features/Blogs/blogsSlice";

const BlogGridItem = React.memo(({blog}) => {
  const { selectOption, selectedCheckbox} = useSelector(state => state.filterBlogs)
  const dispatch = useDispatch()
  const { id, title, image, tags, likes, isSaved, createdAt} = blog;


  const handleStatus = () => {
    const updateBlog = {
      id,
      isSaved: !isSaved
    };
    
    dispatch(fetchUpdateBlogAsync(updateBlog))
    .then(() => {
      // Once the update is complete, dispatch the action to fetch all blogs
      dispatch(fetchBlogsAsync({ sortOption: selectOption, filter: selectedCheckbox }));
    });
  };

  return (
    <div className="lws-card">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>{likes}
          </p>
        </div>
        <Link to={`/blogs/${id}`} className="lws-postTitle">
          {" "}
          {title}
        </Link>
        <div className="lws-tags truncate">
           {
            tags.slice(0, 3).map((tag, i) => <span key={i}>#{tag},</span>)
           }
        </div>
        {/* <!-- Show this element if post is saved --> */}
        <div onClick={handleStatus} className="flex gap-2 mt-4 cursor-pointer">
          {
            isSaved ? <span className="lws-badge"> Saved </span> : <span className="bg-gray-100 py-1 px-3 rounded-full"> Save </span>
          }
        </div>
        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
});

export default BlogGridItem;
