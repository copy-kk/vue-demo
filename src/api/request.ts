import axios from "axios";
import router from "@/router";
import { ElMessage } from 'element-plus'

const request = axios.create({
    baseURL: '/api',  // api的base_url
    timeout: 150000  // 请求超时时间
})

// 3、请求拦截器
request.interceptors.request.use(
    async config => {
        // 每次发送请求之前判断vuex中是否存在token
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        // config.headers.token = sessionStorage.getItem('Token')
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

// 4、响应拦截器
request.interceptors.response.use(
    response => {
        if (response.status === 200) {
            let res = response.data
            if (res.code != 200) {
                ElMessage.error(res.msg)
                return Promise.resolve()
            }

            return Promise.resolve(res.data);
        } else {
            return Promise.reject(response.data);
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。
                case 401:
                    break
                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面
                case 403:
                    sessionStorage.clear();
                    router.push({
                        path: '/login'
                    });
                    break
                // 404请求不存在
                case 404:
                    break;
                // 其他错误，直接抛出错误提示
                default:
            }
            return Promise.reject(error.response);
        }
    }
);

export default request