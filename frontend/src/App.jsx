import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./shared/context/AuthContext";
import ProtectedRoute from "./shared/components/ProtectedRoute";
import HomePage from "./shared/pages/HomePage";
import LoginPage from "./features/auth/pages/LoginPage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import GraphPage from "./features/graph/pages/GraphPage";
import TablePage from "./features/table/pages/TablePage";
import NotFoundPage from "./shared/pages/NotFoundPage";
import UserPage from "./features/user/pages/UserPage";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <RegisterPage />;
}

function App() {
  const { isAuthorized, loading } = useAuthContext();

  if (loading) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/graphview"
          element={
            <ProtectedRoute>
              <GraphPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/tableview"
          element={
            <ProtectedRoute>
              <TablePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userview"
          element={
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
