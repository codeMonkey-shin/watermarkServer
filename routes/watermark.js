const router = require("express").Router();
const {getWatermarkImage} = require("../controllers/watermark");
router.post('/', getWatermarkImage);
module.exports = router;