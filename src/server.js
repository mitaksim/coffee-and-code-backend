// 1. Import d'express
const express = require('express');
// Import mongoose
const mongoose = require('mongoose');
// Import des routes
const routes = require('./routes');

// 2. Création de l'app avec express
const app = express();

// On connect mongoose à la base de données (MongoDB)
mongoose.connect('mongodb+srv://code-and-coffee:codeandcoffee@teste-8wvzd.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// 5. Pour qu'express retourne en format json json
app.use(express.json());

// On appelle les routes
// Express "lit" dans l'ordre, alors bien appeler après la config du format json
app.use(routes);

// 4. Je définis la route où je veux éxecuter le code :
// Premier paramètre: "/",
// Deuxième paramètre: une fonction qui reçoit deux autres paramètres (req, res)
// Cette partie est partie dans le fichier routes.js pour factoriser le code

// 3. Port qui va écouter l'app
app.listen(3333);

