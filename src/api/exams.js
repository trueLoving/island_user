import request from "@/utils/request";


export function getExams(data) {
    return request({
        url: `/exam?library_id=${data}&status=1`,
        method: "get"
    })
}

export function enrollExams(data) {
    return request({
        url: '/userexam/enroll ',
        method: 'post',
        data
    })
}

export function getEnrolledExams(data) {
    return request({
        url: `/userexam/mine?currentPage=1&status=3`,
        method: 'get'
    })
}

export function startExams(data) {
    return request({
        url: `/record/start/${data}`,
        method: 'GET'
    })
}