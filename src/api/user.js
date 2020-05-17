import request from "@/utils/request";


export function login(data) {
    return request({
        url: '/token/signin',
        method: 'post',
        data
    })
}

export function getInfo() {
    return request({
        url: '/user/detail',
        method: 'get',
    })
}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'get'
    })
}


export function register(data) {
    return request({
        url: '/user/register',
        method: 'post',
        data
    })
}


export function modifyPersonInfo(data) {
    return request({
        url: '/user/modify',
        method: 'post',
        data
    })
}

export function changePwd(data) {
    return request({
        url: '',
        method: '',
        data
    })
}

/**
 *
 * 用户测试数据
 *
 * starsky
 *
 * test100/test100
 *
 * test12138/test12138
 *
 */