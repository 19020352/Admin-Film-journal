export const state = () => ({
  isLoggedIn: false,
});

export const mutations = {
  login(state) {
    state.isLoggedIn = true;
  },
  logout(state) {
    state.isLoggedIn = false;
  },
};

export const actions = {
  async login({ commit }, { username, password }) {
    try {
      // Thực hiện xác thực thông tin đăng nhập tại đây
      // Nếu xác thực thành công, gọi mutation login để cập nhật trạng thái đăng nhập
      commit("login");
    } catch (error) {
      throw new Error("Invalid username or password");
    }
  },
  logout({ commit }) {
    commit("logout");
  },
};
