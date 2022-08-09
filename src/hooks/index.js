import {onMounted,ref} from 'vue'

//hooks是一个带有生命周期的函数
//options为传递过来的参数
const useToBase64 = (options) => {
    const {el} = options
    const base64=ref('')

    const toBase64 = (target) => {
        let canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        canvas.height = target.height
        canvas.width = target.width
        ctx.drawImage(target, 0, 0, canvas.height, canvas.width)
        return canvas.toDataURL('image/png')
    }

        onMounted(() => {
            console.log('hooks先执行了')
            let img = document.querySelector(el)
            //解决跨域问题
            img.setAttribute("crossOrigin", 'Anonymous')
            img.onload = () => {
                console.log('图片加载完成了')
                base64.value =  toBase64(img)

            }

        })

    return{
        base64
    }


}


const useCount=(options)=>{
    const {count:num} =options
    let count=  ref(num)
    const increment=()=>{
        count.value++
    }
    const decrement=()=>{
        count.value--
    }
    return{
        count,
        increment,
        decrement
    }

}

//获取元素的scrollTop值
const useOffset=(options)=>{
    const {el}=options
    const scrollTop=ref(0)
    onMounted(()=>{
        let domIns=document.querySelector(el)
        const callback=()=>{
            console.log(domIns.scrollTop)
            scrollTop.value=domIns.scrollTop
        }
        domIns.addEventListener('scroll',callback,true)
    })
    return {
        scrollTop
    }
}
export {useToBase64,useCount,useOffset}