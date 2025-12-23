import apiClient from "./client";

export async function fetchGraphs() {
  const response = await apiClient.get("/api/graphs/");
  return response.data;
}

export async function fetchGraph(id) {
  const response = await apiClient.get(`/api/graphs/${id}/`);
  return response.data;
}

export async function createGraph(data) {
  const response = await apiClient.post("/api/graphs/", data);
  return response.data;
}

export async function updateGraph(id, data) {
  const response = await apiClient.put(`/api/graphs/${id}/`, data);
  return response.data;
}

export async function deleteGraph(id) {
  const response = await apiClient.delete(`/api/graphs/${id}/`);
  return response.data;
}
