import { defineConfig } from 'vite'


export default defineConfig({
   
    
    build:{
        minify:'terser',
        // terserOptions:{
        //     compress:{
        //         drop_console:true,
        //         drop_debugger:true
        //     }
        // },
        //静态资源警告门槛
        chunkSizeWarningLimit:1000,
        //assetsDir:'static',
        sourcemap:true,
        rollupOptions: {
            //external:['vue'],
            output: {
              chunkFileNames: 'static/js/[name]-[hash].js',
              entryFileNames: 'static/js/[name]-[hash].js',
              assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
            //   globals: {
            //     vue: 'Vue'
            //   },
            //   manualChunks(id) {
            //     if (id.includes('node_modules')) {
            //       return id.toString().split('node_modules/')[1].split('/')[0].toString();
            //     }
            //   }
      
            }
          }
    }
})