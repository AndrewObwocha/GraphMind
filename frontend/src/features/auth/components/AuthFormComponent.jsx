import { useState } from "react";
import styles from "../styles/AuthFormComponent.module.css";
import { apiClient } from "../../../shared/helpers/api/client";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../shared/helpers/constants";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../shared/hooks/useAuth";

function AuthFormComponent({ method, route }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const methodName = method === "login" ? "Login" : "Register";
  const from = location.state?.from?.pathname || "/graphview";

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await apiClient.post(route, { username, password });

      if (method === "login" && res.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
        localStorage.setItem(REFRESH_TOKEN, res.data.refreshToken);

        const user = { username };
        login(user, res.data.accessToken);

        navigate(from, { replace: true });
      } else if (method === "register" && res.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
          error.response?.data?.error ||
          "Authentication failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.authFormContainer}>
      <h1 className={styles.formTitle}>{methodName}</h1>

      <form className={styles.authForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="username">
            Username
          </label>
          <input
            id="username"
            className={styles.formInput}
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className={styles.formInput}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div className={styles.formButtons}>
          <button
            type="button"
            className={`${styles.formButton} ${styles.cancelButton}`}
            onClick={() => navigate("/")}
            disabled={loading}
          >
            Cancel
          </button>

          <button
            className={styles.formButton}
            type="submit"
            disabled={loading}
          >
            {loading ? "Processing..." : methodName}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthFormComponent;
