import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import CreateAccount from "../Pages/CreateAccount";
import StepsSignupPage from "../Pages/StepsSignupPage";


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


    
    
    
]);

export default router;