import { login, getInfo, logout } from "@/api/user";
import { getToken, setToken, removeToken } from '@/utils/auth'


const state = {
    token: getToken(),
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
            login(userInfo).then((res) => {
                const { data, message } = res;
                setToken(data.token);
                commit('SET_ISLOGIN', true);
                commit('SET_TOKEN', data.token);
                resolve(message);
            }).catch(_ => { reject() });
        })
    },

    getInfo({ commit, state }, loginState = true) {
        return new Promise((resolve, reject) => {
            getInfo(state.token).then((res) => {
                const { data } = res;
                commit('SET_NAME', data.username);
                commit('SET_ISLOGIN', loginState);
                resolve();
            }).catch(_ => { reject() })
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