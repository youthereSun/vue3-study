import axios from 'axios'
import {message} from 'ant-design-vue';
import { BASE_URL } from './base.url';
//useStore只可在setup中使用，外部使用可直接import
import store from "../store";

//独立的axios实例，不会污染axios全局配置，可多次创建
const instance =axios.create({
    baseURL:BASE_URL,
    timeout:50000
})

//请求拦截
instance.interceptors.request.use(options=>{

    store.commit('toggleLoading',true)
    /*let token = sessionStorage.getItem('access_token')
    if (token) {
        options.headers = {
            'access-token': token,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }*/

    return options
},error => {
    return Promise.reject(error)
})

//返回拦截
instance.interceptors.response.use(
    response => {
        store.commit('toggleLoading',false)
        return response
    },
    error => {
        message.error(
            `[${error.message}],本次操作未完成`
        )

        return Promise.reject(error);
    }
)

class Request {
    constructor() {
        // this.baseUrl = BASE_URL;
    }

    send= function (options) {
        instance(options)
            .then(response => {
                options.callback({
                    type: "success",
                    message: '请求成功',
                    data: response.data
                })
            })
            .catch(error => {
                options.callback({
                    type: "error",
                    message: '请求数据发生错误'
                })
            });
    }

    get= function (config) {
        return this.send(
            Object.assign({}, config, { method:'GET' })
        );
    }

    post= function (config) {
        return this.send(
            Object.assign({}, config, { method:'POST' })
        );
    }


    put = function(config) {
        this.config = config;
        return this.send(
            Object.assign({}, config, { method: "PUT" })
        );
    };
}

export default new Request()

