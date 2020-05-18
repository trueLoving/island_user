import request from "@/utils/request";


export function getChapters(data){
    return request({
        url:'/chapter/enter/'+data,
        method:'get'    
    })
}