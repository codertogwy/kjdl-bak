import axios from 'axios'
import router from "./router";
import {ElMessage} from "element-plus";

const service = axios.create({
    baseURL: '/api',
    timeout: 6 * 1000,
})

service.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('token')
        if (token) {
            config.headers = {token}
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)
service.interceptors.response.use(
    (response) => {
        if (response.data.code === 200) {
            return response.data.data;
        } else if (response.data.code === 401) {
            ElMessage.error("认证失效，请重新登录！")
            router.push({path: '/login'}).then(r => {
            })
        } else if (response.data.code === 403) {
            // message.error("权限不足！")
            ElMessage.error("认证失效，请重新登录！")
            router.push({path: '/login'}).then(r => {
            })
        } else {
            console.error(response)
        }
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default service