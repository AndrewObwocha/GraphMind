import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../shared/hooks/useAuth";
import { Navbar } from "../../../shared/components/NavbarComponent";
import AuthFormComponent from "../components/AuthFormComponent";

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { checkAuth } = useAuth();
  const from = location.state?.from?.pathname || "/";

  const handleLoginSuccess = async () => {
    console.log("Login Success triggered!");
    await checkAuth();
    console.log("CheckAuth finished, navigating to:", from);
    navigate(from, { replace: true });
  };

  return (
    <>
      <Navbar />
      <AuthFormComponent
        method="login"
        route="/api/auth/login"
        onFinish={handleLoginSuccess}
      />
    </>
  );
}

export default LoginPage;
