// nimportiw le module fs bach nkhdmo m3a fichiers
const fs = require("fs");

// nimportiw le module path bach nkhdmo m3a chemins dyal fichiers
const path = require("path");

// nreaddir() katqra contenu dyal dossier, hna __dirname = dossier courant
fs.readdir(__dirname, (err, files) => {
    // ila kayn chi erreur, nprintiw message dyalha f console
    if (err) return console.error("erreur:", err.message);

    // ila ma kayn hata erreur, nprintiw liste dyal fichiers li kaynin f dossier
    console.log("contenu du dossier :", files);
    // nkhdmo tableau bach n7ssbo nombre total dyal fichiers
    let nbFichiers = files.length;

    // boucle bach nprintiw chemin kamel + date de création dyal kol fichier
    files.forEach(f => {
        const cheminComplet = path.join(__dirname, f);

        // n9raw les infos dyal fichier (stats)
        const stats = fs.statSync(cheminComplet);

        // nprintiw chemin + date de création
        console.log(`📁 ${cheminComplet} — créé le : ${stats.birthtime}`);
    });

    
});

