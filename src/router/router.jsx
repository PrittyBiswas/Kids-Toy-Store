import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Home Page</h1>,
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