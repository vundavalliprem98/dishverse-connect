import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";

type RequireAuthProps = {
  children: React.ReactNode;
  allowedRoles?: string[];
};

const RequireAuth = ({ children, allowedRoles = [] }: RequireAuthProps) => {
  const { user, userRole } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(userRole || "")) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;