import request from "@/utils/request";


export function login(data) {
    return request({
        url: '/token/signin',
        method: 'post',
        data
    })
}

export function getInfo(data) {
    return request({
        url: '/user/detail',
        method: 'get',
        data,
        auth:data
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


/**
 * starsky
 *
 * test100/test100
 * 
 * test12138/test12138
 * 
 */