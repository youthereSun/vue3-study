import { createStore } from 'vuex'
//持久化vuex，避免页面刷新丢失vuex
import createPersistedState from "vuex-persistedstate";

// 创建一个新的 store 实例
const store = createStore({
    plugins: [createPersistedState()],
    state () {
        return {
            showLoading:false,
            count: 0,
            userInfo:{
                name:'',
                age:'',
                parents:[],
                wife:{}
            },
            arr:[
                {
                    id:1,
                    des:'第一'
                },
                {
                    id:2,
                    des:'第二'
                }
            ]
        }
    },
    //唯一修改state数据途径
    mutations: {
        toggleLoading(state,payload){
            state.showLoading=payload
        },
        increment (state) {
            state.count++
        },
        change(state,newCount){
            state.count=newCount
        },
        updateUserInfo(state,payload) {
            state.userInfo = payload
        },
        updateUserInfoByKey(state,payload){
            const {key,val} =payload
            state.userInfo[key]=val
        },
        updateArr(state,payload){
            state.arr=payload
        }

    },
    //允许异步，调用mutation中的方法 dispatch调用
    actions: {
        // context 上下文对象，可以理解为store
        changeAsync (context, payload) {
            setTimeout(() => {
                context.commit('change', payload)  // 通过context去触发mutions中的change
            }, 3000)
        },
        is30(context,payload){
            return new Promise(((resolve, reject) => {
                if(context.state.count>=30){
                    reject(new Error('count已经大于30，无法再增长'))
                }else {
                    context.commit('increment')
                    resolve('异步操作执行成功,count 值+1')
                }
            }))

        },
        getUserInfo(context,payload){
            const {id} =payload
            //模拟异步获取数据
            setTimeout(()=>{
                const userInfo={
                    name:'wangjun',
                    age:25,
                    parents:[
                        {
                            name:'father',
                            age:50
                        },
                        {
                            name:'mother',
                            age:45
                        }
                    ],
                    wife:{}
                }
                context.commit('updateUserInfo',userInfo)
                console.log('获取用户数据完成')

            },500)

        }
    },
    getters: {
        computedCount (state) { return `这是通过getter处理过的count：${state.count}`},
        //两个参数，第二个参数为getters本身
        more20stu (state, getters) { return `这是通过getter第二个参数获取到的的count：${getters.computedCount}`}
    }


})


export default store