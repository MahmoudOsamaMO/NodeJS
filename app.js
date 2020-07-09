function sayHello(){
    // console.log(module);
}
sayHello();

// const logger = require('./logger');
// logger.log("sssss");


const os = require('os');
var cpus = os.cpus();
// console.log(cpus);



const fs = require('fs');

fs.readdir('./', function(err,files){
    if(err) console.log('eroor',err);
    else console.log('results', files);
} );

const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a Listener first 
// emitter.on('messageLogged', function(arg){
//  console.log('Listener Called',arg);
// });

// with arrow function
// emitter.on('messageLogged', (arg) => {
//     console.log('Listener Called',arg);
// });

// Raisae an Event
// emitter.emit('messageLogged', {id:1,url:'ss'});

const Logger = require('./logger');
const logger = new Logger();

// listener here after make emit on logger  // use logger extends from eventEmitter 
 logger.on('messageLogged', (arg) => {
     console.log('Listener Called',arg);
 });

logger.log('message');




// HTTP Module 

const http = require('http');

// server has events 

// const server = http.createServer();

// server.on('connection', (socket) => {
//     console.log('New Connection ......');
// });

 const server = http.createServer((req, res)=> {
     if(req.url==='/'){
         res.write('Hello World');
         res.end();
     }

     if(req.url==='/api'){
         res.write(JSON.stringify([1,2,3]));
         res.end();
     }
 });

server.listen(3000); // to open on localhost 3000

console.log('Listening on Port 3000 ......');
