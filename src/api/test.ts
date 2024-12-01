import request from "@/api/request";

export const common = () => {
    return request({
        url: '/common',
        method: 'get'
    })
}