import Vue from "vue";
import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Thêm interceptor `onError` vào axios instance
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 404) {
      Vue.notify({
        group: "api",
        title: "Get API Error",
        text: "Không lấy được dữ liệu",
        duration: 5000
      });
    }
    return Promise.reject(error);
  }
);

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
