// SessionController va gérer tout ce qu'est lié au login, logout, les autentifications, liste des utilisateurs connectés, etc.
// C'est lui qui va recevoir la requête, la traiter et envoyer une réponse
// Méthodes des controllers: index = liste de sessions, show = session unique, store = creation de session, update = mise à jour de la session et destroy = effacer une session

// On aura besoin du model qu'on a crée pour l'utilisateur
const User = require('../models/User');

module.exports = {
    // Session de LOGIN
    // async/await pour que la fonction ait le temps d'être éxecutée avant de passer à la prochaine étape
    async store(req, res) {
        //const email = req.body.email;
        const { email } = req.body;
        
        // On essaie de trouver le mail de l'utilisateur
        let user = await User.findOne({ email });
        // si on le retrouve pas, on le crée
        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }
};

