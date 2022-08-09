import { defineConfig } from 'vite'


export default defineConfig({
    server:{
        port:2222,
        open:true
    }

    // server: {
    //     port: 8080,
    //     proxy: {
    //       '/api: {
    //         target: 'http://****',
    //         changeOrigin: true,
    //         rewrite: (path) => path.replace(/^\/is/, '')
    //       }
    //     }
    //   },
    
})