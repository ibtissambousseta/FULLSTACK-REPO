// nimportiw module "events" bach nkhdmo b EventEmitter
const EventEmitter = require("events");

// nkhlqo instance men EventEmitter
const emitter = new EventEmitter();
// nssajlo wahed l'écouteur li kaytsanna événement smiyto "utilisateurConnecté"
// wa9tma ytkhl9 had l’événement, kaydire had la fonction
emitter.on("utilisateurConnecté", (data) => {
  console.log(` Nouvelle connexion : ${data.nom} (${data.id})`);
});
// daba n3iyto 3la l’événement "utilisateurConnecté" w nsift data
emitter.emit("utilisateurConnecté", { id: 1, nom: "Asma" });
