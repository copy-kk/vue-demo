import request from "@/api/request";

export const common = (data: any) => {
    return request({
        url: '/common/init',
        method: 'get',
        params: data
    })
}