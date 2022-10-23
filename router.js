const hello = require("./controllers/index");
const contactUs = require("./controllers/nodemailer");
const questionsController = require("./controllers/questions");
const questions = questionsController.questions
const questionById = questionsController.questionById

const router = require("express").Router();


router.get("/hello", hello);
router.post('/contact', contactUs);
router.get('questions', questions);
router.get('questionById', questionById);

module.exports = router;
