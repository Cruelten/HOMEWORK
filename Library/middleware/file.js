const multer = require('multer')

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, 'public/pdf')
    },
    filename(req, file, cb) {
        cb(null, `Книга - ${file.originalname}`)
    }
})

module.exports = multer({storage})