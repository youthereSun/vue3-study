import Message from './index.vue'
import {createApp} from "vue";


let messageContainer
const message={
    show:(option)=>{

        const remove=()=>{
            vNode.unmount()
        }
        let vNode=createApp(Message,{...option,remove})
        if(!messageContainer){

            messageContainer = document.createElement('div')
            messageContainer.id='wjyyds-messages-container'
            messageContainer.style.position='fixed'
            messageContainer.style.top='50px'
            messageContainer.style.left='50%'
            messageContainer.style.transform='translate(-50% ,0%)'
            messageContainer.style.display='flex'
            messageContainer.style.flexDirection='column'
            messageContainer.style.maxHeight='50vh'
            messageContainer.style.overflowY='scroll'
            document.body.appendChild(messageContainer)

        }

        //messageContainer = document.getElementById('wjyyds-messages-container')

        let fragment = document.createDocumentFragment();
        messageContainer.appendChild(fragment)
        vNode.mount(fragment)
    }
}
export default message