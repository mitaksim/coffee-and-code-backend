// Modèle de comment on veut que l'utilisateur soit enregistré dans la bdd

// 1. Import de mongoose
const mongoose = require('mongoose');

// Définition de la structure du schéma 
const UserSchema = new mongoose.Schema({
    email: String,

});

// Export du model pour qu'on ait accès dans app
module.exports = mongoose.model('User', UserSchema);