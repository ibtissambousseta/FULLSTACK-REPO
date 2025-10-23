// nimportiw module "events" bach nkhdmo b EventEmitter
const EventEmitter = require("events");

class Logger extends EventEmitter{
    // n3rfu wahed la méthode log li katécrit message f console
  // w f nafs lwqt katemit événement smiyto "messageLogged"
    log(message){
        console.log("LOG :" , message);
        // hna kansifto événement "messageLogged" m3a data
        this.emit("messageLogged",{ message , Date:new Date()});
    }
}

// nkhrj class Logger bach n9dru nimportiwha f fichiers okhrin
module.exports=Logger;