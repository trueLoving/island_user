const getters = {
    isLogin: state => state.user.isLogin,
    name: state => state.user.name,
    token: state => state.user.token
}

export default getters;