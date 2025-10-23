///const { json } = require("express");
// nimportiw module "http" bach nkhdmo serveur web b Node.js
const http = require("http");
// nkhlqo serveur b fonction createServer
// hadi katakhod (req, res) — req hiya la requête, res hiya la réponse
const server = http.createServer((req,res)=>{
      // ila l'utilisateur dkhl l’URL racine "/"
    if(req.url==="/")
    {   // nb3to réponse texte b simple message
        res.write("bienvenu sur notre serveur Node.js !");
        res.end();
          // ila l’utilisateur dkhl l’URL "/api/etudiants"
    }else if(req.url==="/api/etudiants"){
        res.writeHead(200,{"content_type":"application/json"});
            // nsifto tableau d’étudiants sous forme JSON
        res.end(JSON.stringify(["asma","ibtissam","ahmed"]));

    }else{ 
  // sinon (URL ma3rfinhach)
        res.writeHead(404);
        res.end("page non trouvée");
    }
});
// ndemarru serveur f port 3000
server.listen(3000,()=> console.log("serveur en écoute sur le port 3000 ..."));