import { useNavigate } from "react-router-dom";
import { Navbar } from "../../../shared/components/NavbarComponent";
import AuthFormComponent from "../components/AuthFormComponent";

function Register() {
  const navigate = useNavigate();

  const handleRegisterSuccess = () => {
    navigate("/login", {
      state: { message: "Account created! Please log in." },
    });
  };

  return (
    <>
      <Navbar />
      <AuthFormComponent
        method="register"
        route="/api/auth/register"
        onFinish={handleRegisterSuccess}
      />
    </>
  );
}

export default Register;
