
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Admin from "../pages/Admin";

const PrivateRoutes = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
            auth.user
            ? <Outlet/>
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default PrivateRoutes;