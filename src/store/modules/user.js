
const state = {
    token: '',
    name: '',
    isLogin: false
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token;
    },
    SET_NAME: (state, name) => {
        state.name = name;
    },
    SET_ISLOGIN: (state, isLogin) => {
        state.isLogin = isLogin;
    }
}

const actions = {
    login({ commit, userInfo }) {

    },

    logout({ commit, state }) {
        commit('SET_ISLOGIN',false);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}