import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AddBook from "../pages/AddBook/AddBook";
import EditBook from "../pages/EditBook/EditBook";
import Home from "../pages/Home/Home";




const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/addbook",
                element: <AddBook />
            },
            {
                path: "/editbook",
                element: <EditBook />
            }
        ]
    }
])


export default router