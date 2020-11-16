const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home_controller');
const multer = require("multer");

const upload = multer({
    dest: "./uploads/"
});

router.get('/', homeController.home);
// router.post('/up',homeController.up)
// router.post('/process-image', homeController.processing);
router.post('/process-image', upload.single('myImage'),homeController.processing);
module.exports = router;