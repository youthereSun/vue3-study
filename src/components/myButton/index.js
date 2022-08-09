import sunbutton from './index.vue'

const sunButton={
    install(app,option){
        console.log('sunbutton',sunbutton)
        app.component(sunbutton.name,sunbutton)
    }
}

export default sunButton