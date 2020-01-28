// Import du model Coffee
const Coffee = require('../models/Coffee');
// Import du model User
const User = require('../models/User');

module.exports = {

    // Liste les cafés selon la technologie choisi
    async index(req, res) {
        const { tech } = req.query;

        const coffees = await Coffee.find({ techs: tech });

        return res.json(coffees);
    },



    async store(req, res) {
        // Requêtes
        const { filename } = req.file;
        const { name, techs, price } = req.body;
        const { user_id } = req.headers;
        const User = require('../models/User')

        // Si l'utilisateur n'est pas inscrit, retourner un message d'erreur
        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: "L'utilisateur n'existe pas" });
        }
        const coffee = await Coffee.create({
            user: user_id,
            thumbnail: filename,
            name,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        // Réponse
        return res.json({coffee});
    }
}