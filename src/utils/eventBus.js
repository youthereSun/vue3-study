
class Bus{
    constructor() {
        this.list = {}
    }
    emit(name, ...args) {
        let eventName = this.list[name]
        eventName.forEach(ev => {
            ev.apply(this, args)
        })
    }
    on(name, callback) {
        let fn= this.list[name] || [];
        fn.push(callback)
        this.list[name] = fn
    }
}

export default new Bus()

//Bus.emit('onClick',val)
//Bus.on('onClick',(val)=>{})