// On doit toujours préciser à express les fomats des fichiers qu'il doit retourner
// Pour les images on a ajouté une librairie qui s'appelle multer, on doit la configurer :

// Import
const multer = require('multer');
// Import path de node
const path = require('path');

module.exports = {
    // comment multer doit stocker les images
    storage: multer.diskStorage({
        // dans destination, on doit mettre le chemin des archives
        // on mettra pas les slash, pour qu'il reconnaisse automatiquement selon le OS
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, callback) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            callback(null, `${name}-${Date.now()}${ext}`);
        }
    }),
};