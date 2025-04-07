import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"
import AddNew from "../pages/AddNewJob/AddJob"
import EditJob from "../pages/EditJob/EditJob"
import Home from "../pages/Home/Home"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/addjob",
                element: <AddNew />
            },
            {
                path: "/editjob",
                element: <EditJob />
            }
        ]
    }
])

export default router