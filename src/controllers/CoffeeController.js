// Import du model Coffee
const Coffee = require('../models/Coffee');

module.exports = {
    async store(req, res) {
        const { filename } = req.file;

        const { name, techs, price } = req.body;

        const { user_id } = req.headers;

        const coffee = await Coffee.create({
            user: user_id,
            thumbnail: filename,
            name,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return res.json({coffee});
    }
}