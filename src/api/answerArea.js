import request from "@/utils/request";


export function getProblems(data){
    return request({
        url:"/exercise",
        method:'post',
        data
    })
}