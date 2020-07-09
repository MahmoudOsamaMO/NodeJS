const EventEmitter = require('events');

class Logger extends EventEmitter{
    log (message) {
        console.log(message);
        // raise event 
        this.emit('messageLogged', {id:1,url:'ss'});
    }
} 
module.exports = Logger; 