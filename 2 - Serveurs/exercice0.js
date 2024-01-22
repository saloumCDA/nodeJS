// Le module http de Node.js permet de créer un serveur HTTP. Pour cela, on utilise la méthode createServer() de l'objet http, qui retourne un objet de type http.Server. Les objets de type http.Server héritent des caractéristiques d'un objet de type EventEmitter, ce qui permet de leur associer des gestionnaires d'événements en utilisant la méthode on(). L'événement le plus couramment utilisé pour un serveur HTTP est 'request', qui est déclenché chaque fois qu'une requête HTTP est reçue.

// Pour répondre à une requête HTTP, on utilise l'objet http.ServerResponse qui est fourni comme second paramètre au gestionnaire d'événement 'request'. La méthode writeHead() permet de définir l'en-tête de la réponse HTTP, tandis que la méthode write() permet d'écrire le corps de la réponse. Enfin, la méthode end() permet de terminer la réponse et de couper la connexion avec le client HTTP.

// Voici un exemple de code qui utilise le module http pour créer un serveur HTTP :
// Importation du module 'http' de Node.js pour créer un serveur HTTP
const http = require("http");

// Création d'un serveur HTTP
const server = http.createServer((req, res) => {
  // À chaque requête reçue, ces informations sont affichées dans la console
  console.log("Received request:", req.method, req.url);

  // Envoie d'un en-tête de réponse HTTP avec le statut 200 (OK) et le type de contenu en texte brut
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Écriture du message 'Hello, world!' dans le corps de la réponse
  res.write("Hello, world!");

  // Signalisation que la réponse est complète et que le serveur peut l'envoyer au client
  res.end();
});

// Démarrage du serveur pour qu'il écoute sur le port 3000
server.listen(3000, () => {
  // Affichage d'un message dans la console lorsque le serveur démarre avec succès
  console.log("Server started at http://localhost:3000");
});
