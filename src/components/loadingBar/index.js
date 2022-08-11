import LoadingBar  from './index.vue'
import {createVNode ,render} from 'vue'

let vNode
const loadingBar={
    show:()=>{
        if(!vNode){
            console.log('没有vNode')
            vNode = createVNode(LoadingBar)
            render(vNode,document.body)
            console.log('LoadingBar已经挂载到dom上了')
        }
        vNode.component.exposed.loadBar()
    },
    hide:()=>{
        if(!vNode){
            console.log('没有vNode')
            vNode = createVNode(LoadingBar)
            render(vNode,document.body)
            console.log('LoadingBar已经挂载到dom上了')
        }
        vNode.component.exposed.unloadBar()
    }

}

export default loadingBar