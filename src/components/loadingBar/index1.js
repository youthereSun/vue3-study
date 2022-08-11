//另外一种实现方式，待完善
import LoadingBar from './index.vue'
import {createApp} from 'vue'

let vNode
const loadingBar = {
    show: () => {
        if (!vNode) {
            vNode = createApp(LoadingBar, {})
            // 创建无父元素的文档对象，挂载到 DOM 中后直接调用 app.unmount() 移除 MessageBox
            // 和挂载到 div 的区别是 MessageBox 不会作为 div 的子元素
            const frg = document.createDocumentFragment()

            // app.mount 返回组件实例
            // 组件实例内包含 expose 出来的方法或者数据
            vNode.mount(frg)
            document.body.appendChild(frg)
        }
        debugger
        vNode.component.exposed.loadBar()
    }

}

export default loadingBar