import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

export default function PublicRoute() {
  const { authorization } = useAuthContext();
  const location = useLocation();

  if (authorization.email) {
    return <Navigate to="userDetails" state={{ from: location }} replace />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
