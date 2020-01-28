// SessionController va gérer tout ce qu'est lié au login, logout, les autentifications, liste des utilisateurs connectés, etc.
// C'est lui qui va recevoir la requête, la traiter et envoyer une réponse
// Méthodes des controllers: index = liste de sessions, show = session unique, store = creation de session, update = mise à jour de la session et destroy = effacer une session

module.exports = {
    // on souhaite créer une session
    store(req, res) {
        return res.json({ message: 'Hello'});
    }
};

