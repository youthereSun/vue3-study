import store from '../store/index'
import {message} from "ant-design-vue";

//用于清空store里的arr
export const mixin={
    methods:{
        resetStoreArr(){
            store.commit('updateArr',[])
        },
        printInfo(){
            message.info('这是通过全局混入的mixin方法')
        }
    }
}


//全局mixin
export const global_mixin={
    methods:{
        printInfo(){
            message.info('这是通过全局混入的mixin方法')
        }
    }
}