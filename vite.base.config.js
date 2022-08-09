import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
    plugins: [vue()],//处理.vue文件
    envPrefix:'ENV_',//vite默认以VITE配置环境变量开头（未以VITE开头的会被拦截[安全原因]，不能获取到），可在此修改，不可为空
    optimizeDeps:{
        exclude:[]//去除依赖预编译
    },
    resolve: {
        alias: {
          '@': path.resolve(__dirname, './src')
        }
      },


    css: {
        //配置模块css，少用
        // modules:{
        //     localsConvention:"camelCase",
        //     generateScopedName:()=>123
        // },
        // less预处理器
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                //定义less全局变量
                globalVars:{
                    mainColor:"red",
                }
            },
        },
        devSourcemap:true,//开启css sourcemap
    },


})