import axiosInstance from "../../utils/axios";


const fetchBlogs = async ({ sortOption, filter}) => {

    let queryString = ''

    console.log(filter)

    if (sortOption === "newest") {
        queryString = `?_sort=createdAt&_order=desc`
    } else if (sortOption === "most_liked") {
        queryString = `?_sort=likes&_order=desc`
    } else {
        queryString = ''
    }

    if (filter !== "all") {
        queryString = `?isSaved=true`
    }

    const url = `http://localhost:9000/blogs${queryString}`
    console.log(url)

    const response = await axiosInstance.get(`/blogs${queryString}`);
    return response.data
}

export default fetchBlogs