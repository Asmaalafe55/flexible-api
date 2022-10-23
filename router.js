const hello = require("./controllers/index");
const contactUs = require("./controllers/nodemailer");
const questions = require("./controllers/questions");

const router = require("express").Router();


router.get("/hello", hello);
router.post('/contact', contactUs);
router.get('questions', questions);

module.exports = router;
