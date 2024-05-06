const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response',(data)=>{
    console.log('received')
    console.log(data);
})


customEmitter.emit('response','hello world');
customEmitter.emit('response','fazt');
customEmitter.emit('response',30);
customEmitter.emit('response',[1,2,3]);
customEmitter.emit('response',{name:"ryan"});