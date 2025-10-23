const A = require('./mathA');
const B = require('./mathB');

console.log("Résultat A",A);
console.log("Résultat B",B);

//Discussion :
/* - Que se passe-t-il si plusieurs fichiers définissent les mêmes noms ?

Ils entrent en conflit : le deuxième écrase ou fait planter le premier (selon le cas).
Dans de grands projets, cela provoquerait des bugs difficiles à comprendre.

  - Pourquoi est-ce un problème dans un vrai projet ?

Les fichiers partagent le même espace global (global scope).

Une variable d’un module peut modifier ou écraser celle d’un autre.

Le code devient imprévisible et difficile à maintenir.

  - Comment Node.js résout ce problème ?

Node isole chaque fichier dans son propre module.
 Cela signifie que :

Les variables et fonctions déclarées dans un fichier restent locales à ce fichier.

Tu peux choisir ce que tu veux partager avec module.exports et ce que tu veux importer avec require().*/