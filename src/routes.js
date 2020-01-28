// 1. Import express
const express = require ('express');
// Import de SessionController
const SessionController = require('./controllers/SessionController');

// 2. On appele la fonction Router d'express
const routes = express.Router();

// 3. On recupère la route crée dans server.js et je change app.post par routes.post
routes.post('/sessions', SessionController.store);

// On doit exporter les routes pour qu'on ait accès dans app
module.exports = routes;