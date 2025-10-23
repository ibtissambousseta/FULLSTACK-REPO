// nimportiw le module OS bach nkhdmo m3a info dyal system
const os = require("os");

// nprintiw nom dyal l’platform (Windows, Linux, macOS…)
console.log("plateforme:", os.platform());

// nprintiw architecture dyal CPU (x64, arm…)
console.log("Architecture:", os.arch());

// nprintiw ch7al dyal cores f CPU
console.log("CPU:", os.cpus().length, "coeurs");

// nprintiw total mémoire f system (en bytes)
console.log("Mémoire totale:", os.totalmem());

// nprintiw mémoire libre (en bytes)
console.log("Mémoire libre:", os.freemem());

// nprintiw uptime dyal system b les heures (os.uptime() kat3ti secondes)
console.log("uptime (en heures):", (os.uptime()/3600).toFixed(2));

/*Différence entre os.platform() et os.arch()

os.platform() renvoie le système d’exploitation sur lequel Node.js s’exécute, par exemple win32 pour Windows, linux pour Linux ou darwin pour macOS.

os.arch() indique l’architecture du processeur, comme x64 pour 64 bits ou arm pour ARM.

Utilité dans une application réelle

Ces informations sont très utiles pour surveiller et adapter le comportement d’une application :

Afficher un tableau de bord système avec des informations sur le CPU, la mémoire et le système.

Adapter le fonctionnement de l’application selon l’OS ou l’architecture (ex. choix de bibliothèques natives ou de versions binaires).

Détecter automatiquement les configurations pour optimiser les performances ou prévenir des incompatibilités.


*/