// 1. Import d'express
const express = require('express');

// 2. Création de l'app avec express
const app = express();

// 5. Pour qu'express retourne en format json json
app.use(express.json());

// 4. Je définis la route où je veux éxecuter le code :
// Premier paramètre: "/",
// Deuxième paramètre: une fonction qui reçoit deux autres paramètres (req, res)
app.post('/users', (req, res) => {
    return res.json(req.body);
});

// 3. Port qui va écouter l'app
app.listen(3333);

