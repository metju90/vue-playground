import imgur from "../api/imgur";

const state = {
  token: null,
};

const getters = {
  isLoggedIn: (state) => Boolean(state.token),
};

const actions = {
  logout: ({ commit }) => {
    commit("setToken", null);
  },

  login: () => {
    imgur.login();
  },
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
