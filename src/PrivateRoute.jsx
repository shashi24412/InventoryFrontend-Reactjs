import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./Authorization/AuthContext";
import Sinin from "./Sinin";

const PrivateRoute = () => {
    const { userData } = useAuth();
    const location = useLocation();
    if (!userData.validUser)
        return <Navigate to="/" state={{ from: location }} replace />

    const isAllowed = userData.allowedPages[0].pages?.filter(
        x => location.pathname.startsWith(x)
    );


    return isAllowed?.length > 0 ? <Outlet /> : <Navigate to="/unauthorized" replace />;

}
export default PrivateRoute

//Note:-

// The useNavigate hook provides a function that allows you to navigate programmatically, typically 
// in response to user actions or events (e.g., form submission, button click).

// The <Navigate> component is used for automatic or conditional redirection during the render 
// process. It is useful for scenarios like redirecting unauthenticated users or after a specific action completes.
