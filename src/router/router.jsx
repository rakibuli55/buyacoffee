import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import CreateAccount from "../Pages/CreateAccount";
import StepsSignupPage from "../Pages/StepsSignupPage";
import DashbaordLayout from "../layout/DashbaordLayout";
import HompePage from "../Pages/dashboardPages/HomePage/HompePage";
import MyPage from "../Pages/dashboardPages/MyPage/MyPage";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        children: [
            {
                path:'/',
                element:<HomePage />
            },
            {
                path:'/login',
                element:<LoginPage />
            },
            {
                path:'/signup',
                element:<SignUpPage />
            },
            {
                path:'/createaccount',
                element:<CreateAccount />
            },
            {
                path:'/signupsteps',
                element:<StepsSignupPage />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashbaordLayout></DashbaordLayout>,
        children: [
            {
                path: '/dashboard/home',
                element: <HompePage></HompePage>
            },
            {
                path: '/dashboard/my-page',
                element: <MyPage></MyPage>
            }
        ]
    }


    
    
    
]);

export default router;