import axiosInstance from "../../utils/axios";


const fetchBlogs = async () => {
    const response = await axiosInstance.get("/blogs");
    return response.data
}

export default fetchBlogs