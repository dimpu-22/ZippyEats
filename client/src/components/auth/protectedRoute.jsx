import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({
  children,
  adminOnly = false,
}) => {
  const { user } = useAuth();

  // User not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Admin route protection
  if (adminOnly && user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;