import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../Pages/HomePage";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        children: [
            {
                path:'/',
                element:<HomePage />
            }
        ]
    }
]);

export default router;