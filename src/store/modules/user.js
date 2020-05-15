import { login, getInfo, logout } from "@/api/user";

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
            commit('SET_ISLOGIN', true);
            resolve(userInfo);
        })
    },

    getInfo({ commit, state }) {
        return new Promise((resolve,reject)=>{
            // todo api request
        })
    },

    logout({ commit, state }) {
        return new Promise((resolve,reject)=>{
            // todo api request
            commit('SET_ISLOGIN', false);
        })
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}