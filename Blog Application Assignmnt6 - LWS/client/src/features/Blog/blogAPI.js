import axiosInstance from "../../utils/axios";


const fetchBlog = async (id) => {
    const response = await axiosInstance.get(`/blogs/${id}`);
    return response.data
}

export default fetchBlog