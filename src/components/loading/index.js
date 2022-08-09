
import Loading from './index.vue'
import {createVNode,render} from 'vue'
const loading ={
    install(app,option){
        console.log('app',app)
        console.log('loading',Loading)
        //将组件转为vNode对象
        const vNode=createVNode(Loading)
        console.log('vNode',vNode)
        //将虚拟dom通过render方法挂载到真实dom上
        render(vNode,document.body)
        console.log('render',vNode)
        //通过exposed属性拿到组件抛出来的方法，挂载到全局
        app.config.globalProperties.$loading=  {
            show:vNode.component.exposed.showLoading,
            hide:vNode.component.exposed.hideLoading,
        }
        //全局调用方法
        // app.config.globalProperties.$loading.show()
        //
        // setTimeout(()=>{
        //     app.config.globalProperties.$loading.hide()
        // },2000)

    }
}

export default loading