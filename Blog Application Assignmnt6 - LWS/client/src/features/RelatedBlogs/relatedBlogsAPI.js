import axiosInstance from "../../utils/axios";

const fetchRelatedBlogs = async ({ currentId, tags }) => {
  const limit = 3;

  const queryString =
    tags.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${currentId}&_limit=${limit}`
      : `id_ne=${currentId}&_limit=${limit}`;

  const response = await axiosInstance.get(`/blogs?${queryString}`);
  return response.data;
};

export default fetchRelatedBlogs;
