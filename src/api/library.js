import request from "@/utils/request";


export function getLibraries(data) {
    return request({
        url: '/library/',
        method: 'get',
        data
    })
}