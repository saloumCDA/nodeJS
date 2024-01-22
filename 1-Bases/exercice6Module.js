// Importation du module 'fs' (filesystem) de Node.js pour interagir avec le système de fichiers
const fs = require("fs");

// Définition de la fonction 'writeToFile' pour écrire un message dans un fichier
const writeToFile = (message, fileName) => {
  // Utilisation de la méthode 'writeFile' du module 'fs' pour écrire dans le fichier
  fs.writeFile(fileName, message, { encoding: "utf8" }, (err) => {
    // Gestion des erreurs : si une erreur se produit, elle est levée
    if (err) throw err;

    // Affichage d'un message dans la console si l'écriture est réussie
    console.log(`Le fichier "${fileName}" a été créé avec succès !`);
  });
};

// Exportation de la fonction 'writeToFile' pour qu'elle puisse être utilisée dans d'autres fichiers
module.exports = writeToFile;
