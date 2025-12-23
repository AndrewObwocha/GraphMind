import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { isAuthorized, loading } = useAuth();
  const location = useLocation();

  if (loading) return null; // or a spinner

  if (!isAuthorized) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}
