import LineChart from './lineCharts.vue'
import BarChart from './barCharts'
import PieChart from './pieCharts.vue'

const components=[LineChart,BarChart,PieChart]

export  default {
    install(app){
        components.forEach(v=>{
            app.component(v.name,v)
        })
    }
}