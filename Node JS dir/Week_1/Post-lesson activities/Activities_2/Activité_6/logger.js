// nimportiw module "fs" bach nkhdmo m3a les fichiers (nktbu fihom, nqrawhom...)
const fs = require("fs");

// nimportiw module "events" bach nkhdmo b EventEmitter
const EventEmitter = require("events");

// nkhlqo class Logger li  (extends) men EventEmitter
class Logger extends EventEmitter {
  // fonction log : katakhod message w katdir 2 hwayj
  log(message) {
    // 1 tkteb message f fichier log.txt (w ila makanch kaytsna3)
    fs.appendFileSync("log.txt", message + "\n");

    // 2 t3ayet 3la événement smiyto "messageLogged" bach t3lmna blli tsjel message
    this.emit("messageLogged", { message, date: new Date() });
  }
}

// nkhrj class Logger bach n9dru nimportiwha f fichier app.js
module.exports = Logger;
