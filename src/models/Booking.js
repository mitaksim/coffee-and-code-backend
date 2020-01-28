// Booking permettra à un utilisateur de réserver un café bar

// 1. Import de mongoose
const mongoose = require('mongoose');

// Définition de la structure du schéma 
const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    // quel utilisateur a fait une réserve
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // et dans quel café il l'a fait
    coffee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coffee'
    }
});

// Export du model pour qu'on ait accès dans app
module.exports = mongoose.model('Booking', BookingSchema);