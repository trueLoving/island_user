const getters = {
    isLogin: state => state.user.isLogin,
    name: state => state.user.name,
    token: state => state.user.token,
    user_id: state => state.user.user_id
}

export default getters;