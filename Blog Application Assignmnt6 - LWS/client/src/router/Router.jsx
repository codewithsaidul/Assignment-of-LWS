import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import SingleBlog from "../pages/SingleBlog";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/blog/:blogId",
                element: <SingleBlog />
            }
        ]
    }
])


export default router