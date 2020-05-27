import request from "@/utils/request";


export function getExams(data) {
    return request({
        url: `/exam?library_id=${data}`,
        method: "get"
    })
}

export function enrollExams(data){
    return request({
        url:'/userexam/enroll ',
        method:'post',
        data
    })
}