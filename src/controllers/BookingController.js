// Import le model Booking
const Booking = require('../models/Booking');

module.exports = {
    // création de réserve
    async store(req, res) {
        // quel utilisateur souhaite réserver (user_id)
        const { user_id } = req.headers;
        // dans quel café il souhaite réserver (coffee_id)
        const { coffee_id } = req.params;
        // quand ?
        const { date } = req.body;

        const booking = await Booking.create({
            user: user_id,
            coffee: coffee_id,
            date,
        });
        
        // Pour avoir toutes les infos de l'utilisateur et du café choisi pas que leur id
        await booking.populate('coffee').populate('user').execPopulate();

        return res.json(booking);
    }
};