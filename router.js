const hello = require("./controllers/index");
const contactUs = require("./controllers/nodemailer");

const router = require("express").Router();


router.get("/hello", hello);
router.post('/contact', contactUs)

module.exports = router;
