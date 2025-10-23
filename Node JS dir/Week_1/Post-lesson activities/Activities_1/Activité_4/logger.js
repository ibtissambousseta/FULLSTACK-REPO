const EventEmitter = require("events");

class logger extends EventEmitter{
    log(message){
        console.log("LOG :", message);
        this.emit("messageLogged",{ message ,Date:new Date() });
    }
    
}
module.exports =logger;