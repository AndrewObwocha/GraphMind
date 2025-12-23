import apiClient from "./client";

export async function fetchUser() {
  const response = await apiClient.get("/api/user/");
  return response.data;
}

export async function updateUser(data) {
  const response = await apiClient.put("/api/user/", data);
  return response.data;
}

export async function fetchUserProfile(userId) {
  const response = await apiClient.get(`/api/users/${userId}/`);
  return response.data;
}
