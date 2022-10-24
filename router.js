const hello = require("./controllers/index");
const contactUs = require("./controllers/nodemailer");
const questionsController = require("./controllers/questions");

const router = require("express").Router();


router.get("/hello", hello);
router.post('/contact', contactUs);
router.get('/questions', questionsController.questions);
router.post('/questionById', questionsController.questionById);

module.exports = router;
