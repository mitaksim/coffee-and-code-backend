// 1. Import d'express
const express = require('express');

// 2. Création de l'app avec express
const app = express();

// 4. Je définis la route où je veux éxecuter le code :
// Premier paramètre: "/",
// Deuxième paramètre: une fonction qui reçoit deux autres paramètres (req, res)
app.get('/', (req, res) => {
    return res.json({ message: 'Hello World' });
});

// 3. Port qui va écouter l'app
app.listen(3333);
