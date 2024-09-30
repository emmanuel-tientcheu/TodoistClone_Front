import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/login";
import SignUp from "../../pages/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    }
])