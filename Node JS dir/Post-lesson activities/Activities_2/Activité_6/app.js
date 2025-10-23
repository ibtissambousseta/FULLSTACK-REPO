// nimportiw module "http" bach nkhlqo serveur web
const http = require("http");

// nimportiw class Logger li drnaha f logger.js
const Logger = require("./logger");

// nkhlqo instance men Logger
const logger = new Logger();

// nssajlu listener (écouteur) l’événement "messageLogged"
logger.on("messageLogged", (data) => {
  console.log(" Événement capturé :", data);
});

// nkhlqo serveur http
const server = http.createServer((req, res) => {
  // kol ma yji requête, ndir log dyalha f fichier log.txt
  logger.log(`Requête reçue : ${req.url}`);

  // nb3to réponse b message simple
  res.end(" Requête enregistrée !");
});

// nkhalli serveur ytsenna f port 4000
server.listen(4000, () => console.log(" Serveur en écoute sur le port 4000..."));
