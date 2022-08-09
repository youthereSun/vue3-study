/**
 *父组件为id= img-warpper
 *有固定高度，overflow-y：scroll
 *则在此容器里的图片为懒加载
 */

const lazyPlugin={
    install(app,option){
        let parent_dom
        const observerList=[]

        const scrollFun=()=>{
            let setImgSrc=(num)=>{
                observerList.forEach(({el,value},index)=>{
                    let a=el.offsetTop;//元素到页面顶部的距离
                    let b=document.body.clientHeight;//视口高度
                    let c=parent_dom.scrollTop;//超过页面顶部的距离，滚动条的高度
                    if(el.offsetTop-document.body.clientHeight-parent_dom.scrollTop<num){
                        el.src=value
                        //把渲染过的dom元素删除掉
                        observerList.splice(index,1)
                    }
                })
            }
            return ()=>{
                setImgSrc(100)
                parent_dom.addEventListener('scroll',()=>{
                    setImgSrc(100)
                })
            }

        }


        app.directive('lazyLoadImg',{
            mounted(el,{value}){
                parent_dom=document.getElementById('img-warpper')
                //console.log('v-show-on-screen指令执行了',el)
                //console.log('v-show-on-screen指令绑定的数据',value)
                observerList.push({el,value})
                scrollFun()()
                //el.src=value
            },
            unmounted(el) {
                let index=observerList.findIndex(item=>item.el===el)
                if(index!=-1){
                    observerList.splice(index,1)
                }
            }
        })
    }
}

export {lazyPlugin}