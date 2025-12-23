import apiClient from "./client";

export async function login(email, password) {
  const response = await apiClient.post("/api/auth/login/", {
    email,
    password,
  });
  return response.data;
}

export async function register(email, password) {
  const response = await apiClient.post("/api/auth/register/", {
    email,
    password,
  });
  return response.data;
}

export async function refreshToken(refreshToken) {
  const response = await apiClient.post("/api/auth/refresh/", {
    refresh: refreshToken,
  });
  return response.data;
}
