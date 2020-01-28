// Modèle de comment on veut qu'un coffee bar soit enregistré dans la bdd

// 1. Import de mongoose
const mongoose = require('mongoose');

// Définition de la structure du schéma 
const CoffeeSchema = new mongoose.Schema({
    thumbnail: String,
    name: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

// Export du model pour qu'on ait accès dans app
module.exports = mongoose.model('Coffee', CoffeeSchema);