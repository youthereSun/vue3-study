import {createRouter, createWebHashHistory, createWebHistory} from "vue-router"

// 1. 定义路由组件， 注意，这里一定要使用 文件的全名（包含文件后缀名）
import Home from '../views/home/index.vue'
import Page1 from '../views/demo/page1/page1.vue'
import Page3 from '../views/demo/page3/page3.vue'
import Page4 from '../views/demo/page4/page4.vue'
import Page2 from '../views/demo/page2/page2.vue'
import Page5 from '../views/demo/page5/page5.vue'
//import Page6 from '../views/demo/page6/page6.vue'

//懒路由加载组件，加快首屏渲染
const Page6=() => import('../views/demo/page6/page6.vue')
const Page7=() => import('../views/demo/page7/page7.vue')
const Page8=() => import('../views/demo/page8/index.vue')
const Page9=() => import('../views/demo/page9/index.vue')

const Page10=() => import('../views/demo/page10/index.vue')
const Page11=() => import('../views/demo/page11/index.vue')

// 2. 定义路由配置
const routes = [
    { path: "/",redirect: '/home' },
    { path: "/home",name:"Home", component: Home },
    { path: "/page1",name:"Page1", component: Page1 },
    { path: "/page2",name:"Page2", component: Page2 },
    { path: "/page3",name:"Page3", component: Page3 },
    { path: "/page4",name:"Page4", component: Page4 },
    { path: "/page5",name:"Page5", component: Page5 },
    { path: "/page6",name:"Page6", component: Page6 },
    { path: "/page7",name:"Page7", component: Page7 },
    { path: "/page8",name:"Page8", component: Page8 },
    { path: "/page9",name:"Page9", component: Page9 },
    { path: "/page10",name:"Page10", component: Page10 },
    { path: "/page11",name:"Page11", component: Page11 },

];

// 3. 创建路由实例
const router = createRouter({
    // 4. 采用hash 模式
    history: createWebHashHistory(),
    // 采用 history 模式
    // history: createWebHistory(),
    routes, // short for `routes: routes`
});

export default router
