const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home_controller');
const multer = require("multer");

const upload = multer({
    dest: "./Face_model/test",
    // fileFilter: function (_req, file, cb) {
    //     checkFileType(file, cb);
    // }
});

router.get('/', homeController.home);

router.post('/process-image', upload.single('myImage'), homeController.processing);
router.get('/result', homeController.results);
module.exports = router;