import { login, getInfo, logout } from "@/api/user";
import { getToken, setToken, removeToken } from '@/utils/auth'


const state = {
    token: '',
    name: '',
    sex: '',
    email: '',
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
    },
    SET_EMAIL: (state, email) => {
        state.email = email;
    },
    SET_SEX: (state, sex) => {
        state.sex = sex;
    }
}

const actions = {

    login({ commit }, userInfo) {
        return new Promise((resolve, reject) => {
            // todo api request
            setToken('hello world');
            commit('SET_ISLOGIN', true);
            resolve();
        })
    },

    getInfo({ commit }, loginState = true) {
        return new Promise((resolve, reject) => {
            // todo api request
            commit('SET_NAME', '张三');
            commit('SET_ISLOGIN', loginState);
            resolve();
        })
    },

    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            // todo api request
            removeToken();
            commit('SET_ISLOGIN', false);
            resolve();
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}