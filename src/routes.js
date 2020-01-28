// 1. Import express
const express = require ('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');
// Import des controllers
const SessionController = require('./controllers/SessionController');
const CoffeeController = require('./controllers/CoffeeController');
const DashboardController = require('./controllers/DashboardController');


// 2. On appele la fonction Router d'express
const routes = express.Router();

const upload = multer(uploadConfig);

// Routes
routes.post('/sessions', SessionController.store);
routes.get('/coffees', CoffeeController.index);
routes.post('/coffees', upload.single('thumbnail'), CoffeeController.store);
routes.get('/dashboard', DashboardController.show);

// On doit exporter les routes pour qu'on ait accès dans app
module.exports = routes;