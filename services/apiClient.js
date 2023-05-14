import Vue from "vue";
import axios from "axios";

let cookie = document.cookie;
// Tách các thành phần của cookie
const cookieParts = cookie.split(";");

// Tạo một đối tượng để lưu trữ dữ liệu từ cookie
const cookieData = {};
if (cookieParts.length > 0) {
  cookieParts.forEach((part) => {
    const [key, value] = part.split("=");
    if (key) {
      const decodedKey = decodeURIComponent(key.trim());
      const decodedValue = decodeURIComponent(value.trim());
      cookieData[decodedKey] = decodedValue;
    }
  });
}

const api = axios.create({
  baseURL: "https://localhost:44358/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: cookieData?.token || "",
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
        duration: 2000,
      });
    }
    return Promise.reject(error);
  }
);

export default {
  login(email, password) {
    return api.get(`/Users/login?email=${email}&password=${password}`);
  },
  // USER
  getUsers() {},
  getUser(id) {},
  addUser(user) {},
  updateUser(id, user) {},
  deleteUser(id) {},

  // FILM
  getFilms(params) {
    return api.post("/Admin/PagingFilm", params);
  },
  getFilmDetail(id) {
    return api.get(`/Admin/GetFilmByID?id=${id}`);
  },
  updateFilm(id, film) {
    return api.put(`/Admin/UpdateFilm?id=${id}`, film);
  },
};
