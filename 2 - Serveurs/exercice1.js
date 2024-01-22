/**
  Utilisation du module http de Node JS pour créer un serveur http de plus en plus élaboré.

  Votre serveur devra être joignable à l'URL : [protocole]://[adresse IP ou nom de domaine][:port]

  Par exemple :
   - Protocole : http
   - Adresse IP : 100.50.25.12
   - Port : 6666

   Donne l'URL : http://100.50.25.12:6666
**/

/**
  Exercices :
  
  1.Vous devez créer un serveur HTTP en utilisant le module http de Node.js, qui retourne dans sa réponse HTTP un corps de réponse valide en format HTMLcontenant un title de votre choix et un <h1>Hello, World!</h1>. Il est important de s'assurer que le Mime Type correct (text/html) est spécifié dans l'en-tête de la réponse HTTP pour que le navigateur comprenne qu'il s'agit d'un document HTML.
**/
// Importation du module 'http' de Node.js pour créer des serveurs HTTP
const http = require("http");

// Création d'un serveur HTTP. Cette fonction est appelée à chaque fois qu'une requête est faite au serveur.
const server = http.createServer((request, response) => {
  // Définition de l'en-tête de la réponse HTTP. Le statut 200 indique un succès, et 'Content-Type' est défini sur 'text/html' pour indiquer que la réponse est en HTML.
  response.writeHead(200, { "Content-Type": "text/html" });

  // Écriture du contenu HTML dans le corps de la réponse.
  // Ici, un document HTML simple est envoyé comme réponse, contenant un titre et un titre de niveau 1 (h1).
  response.write(
    "<!DOCTYPE html><html><head><title>Hello World</title></head><body><h1>Hello, World!</h1></body></html>"
  );

  // Fin de la réponse. Cela indique au serveur que le message de réponse HTTP est complet et peut être envoyé au client.
  response.end();
});

// Le serveur commence à écouter les requêtes entrantes sur le port 3000.
server.listen(3000);

// Affichage d'un message dans la console indiquant que le serveur est en cours d'exécution et écoutant sur le port 3000.
console.log("Server running at http://localhost:3000/");
