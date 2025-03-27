import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogsAsync } from "../../features/Blogs/blogsSlice";
import Loading from "../ui/Loading";
import BlogGridItem from "./BlogGridItem";

const BlogGrid = () => {
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );
  const { selectOption, selectedCheckbox } = useSelector(
    (state) => state.filterBlogs
  );
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(
      fetchBlogsAsync({ sortOption: selectOption, filter: selectedCheckbox })
    );
  }, [selectOption, selectedCheckbox, dispatch]);

 


  if (isLoading) return <Loading />;

  if (!isLoading && isError) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-210px)]">
        <p className="text-4xl font-bold text-red-600">{error}</p>
      </div>
    );
  }

  if (!isLoading && !isError && blogs.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-210px)]">
        <p className="text-4xl font-bold text-gray-500">Blogs Not Found!</p>
      </div>
    );
  }

  return (
    <div className="post-container" id="lws-postContainer">
      {blogs.map((blog) => (
        <BlogGridItem key={blog.id} blog={blog}  />
      ))}
    </div>
  );
};

export default BlogGrid;
