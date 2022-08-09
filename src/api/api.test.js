import axios from 'axios'
import {message} from 'ant-design-vue';
//useStore只可在setup中使用，外部使用可直接import
import store from "../store";

//独立的axios实例，不会污染axios全局配置，可多次创建
const instance =axios.create({
    baseURL:'https://api.codelife.cc/',
    timeout:50000
})

//请求拦截
instance.interceptors.request.use(options=>{
    options.headers['signaturekey']= 'U2FsdGVkX19H8noelLPuObm93lSs9+kHw1dghnn6gAw='
    store.commit('toggleLoading',true)

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

export function GetCodeLifeData(data,callback){
    new Request().post({
        url:'api/top/list',
        data,
        callback

    })
}

