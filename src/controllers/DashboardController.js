// DashboardController va se charger d'afficher les cafés inscrit par un utilisateur précis

// Import du model de  Coffee
const Coffee = require('../models/Coffee');

module.exports = {
    async show(req, res) {
        const {user_id } = req.headers;

        const coffees = await Coffee.find({ user: user_id });

        return res.json(coffees);
    }
}