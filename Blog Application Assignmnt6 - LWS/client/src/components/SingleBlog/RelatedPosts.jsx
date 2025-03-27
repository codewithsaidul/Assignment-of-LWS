import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogsAsync } from "../../features/RelatedBlogs/relatedBlogsSlice";
import RelatedPost from "./RelatedPost";



const RelatedPosts = ({tags, id}) => {
  const { relatedBlogs } = useSelector(state => state.relatedBlogs)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchRelatedBlogsAsync({ currentId: id, tags }))
  }, [tags, id, dispatch])

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
        {/* <!-- related post  --> */}
        {
          relatedBlogs.map(blog => <RelatedPost key={blog.id} blog={blog} />)
        }
        {/* <!-- related post ends --> */}
      </div>
    </aside>
  );
};

export default RelatedPosts;
