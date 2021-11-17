
//EventEmitter мы можем наследоваться от данного класca, который дам добавляет определенный функционал, имитить или прослушивать определенные события

const EventEmitter = require('events');

class Logger extends EventEmitter{
log(message){
    this.emit('message', `${message} ${Date.now()}`)
}
}
const logger = new Logger()
logger.on('message', data =>{
    console.log(data);
})
logger.log('hello');


