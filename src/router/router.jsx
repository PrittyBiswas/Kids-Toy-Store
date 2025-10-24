import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/authors",
        element: <h1>Authors Page</h1>,
    },
    {
        path: "/toys",
        element: <h1>Toys Page</h1>,
    },
    {
        path: "/*",
        element: <h1>404 Page Not Found</h1>,
    }
])
export default router;