import axiosInstance from "../../utils/axios";


const fetchUpdateBlog = async (blog) => {
    const response = await axiosInstance.patch(`/blogs/${blog.id}`, blog);
    return response.data
}

export default fetchUpdateBlog