import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

export default function PrivateRoutes({ allowedRoles }) {
  const { authorization } = useAuthContext();
  const location = useLocation();

  return allowedRoles?.includes(authorization.role) ? (
    <Outlet />
  ) : authorization?.email ? (
    <Navigate to="/userDetails" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
