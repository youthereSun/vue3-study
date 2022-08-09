import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from 'vue-axios'
import Antd from 'ant-design-vue'
import "ant-design-vue/dist/antd.less";
import {global_mixin} from "./mixin/mixin";
import {lazyPlugin} from "./directives";
import mitt from "mitt";
import loading from "./components/loading";
import sunButton from "./components/myButton";

//第三方eventBus库
const Mitt=mitt()
const app = createApp(App)

//在全局实例上挂载axios
app.config.globalProperties.$axios=axios
app.config.globalProperties.$Bus=Mitt
// app.directive('lazy-load',{
//     created() {
//         console.log('created');
//     },
//     beforeMount() {
//         console.log('beforeMount');
//     },
//     mounted() {
//         console.log('mounted');
//     },
//     beforeUpdate() {
//         console.log('beforeUpdate');
//     },
//     updated() {
//         console.log('updated');
//     },
//     beforeUnmount() {
//         console.log('beforeUnmount');
//     },
//     unmounted() {
//         console.log('unmounted');
//     }
// })

//全局挂载mixin
app.mixin(global_mixin)
// 引入路由对象实例
app.use(router)
app.use(Antd)
app.use(store)
//全局装载自定义指令
app.use(lazyPlugin)
//全局装载自定义组件
app.use(loading)
app.use(sunButton)


app.mount('#app')

