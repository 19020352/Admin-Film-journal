import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  getUsers() {
    return api.get("/api/users");
  },
  getUser(id) {
    return api.get(`/api/users/${id}`);
  },
  addUser(user) {
    return api.post("/api/users", user);
  },
  updateUser(id, user) {
    return api.put(`/api/users/${id}`, user);
  },
  deleteUser(id) {
    return api.delete(`/api/users/${id}`);
  },
};
