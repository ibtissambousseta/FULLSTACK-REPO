// nimportiw class Logger li drnaha f fichier logger.js
const Logger = require("./logger");
// ncréew instance men class Logger
const logger = new Logger();
// nssajlu écouteur (listener) l'événement "messageLogged"
// wa9tma yt3ayet 3lih f logger, had fonction ghadi tkhdem
logger.on("messageLogged",(Data)=>{
    console.log("Evénement Capturé :",Data);
});
// ndir appel l méthode log bach ntestiw l'événement
logger.log("Application démarrée !");