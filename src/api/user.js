import request from "@/utils/request";


export function login(data) {
    return request({

    })
}

export function logout() {
    return request({

    })
}


/**
 * 
 * @param {Object} data
 * account  --  用户账号
 * password --  用户密码
 * username --  用户名
 * email    --  用户邮箱 can null
 * sex      --  用户性别
 */
export function register(data) {
    return request({
        url:'/user/register',
        method:'post',
        data
    })

}
