const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home_controller');
const multer = require("multer");

const upload = multer({
    dest: "./uploads/"
});

router.get('/', homeController.home);
// router.post('/up',homeController.up)
// router.post('/process-image',upload.single("image_up"), homeController.processing);
router.post('/process-image', upload.single('myImage'),homeController.photo);
module.exports = router;