
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


const PrivateRoutes = () => {
    const isLogedIn=useSelector((state)=>state.auth.isLoggedIn);
    const location = useLocation();

    return (
            isLogedIn
            ? <Outlet/>
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default PrivateRoutes;