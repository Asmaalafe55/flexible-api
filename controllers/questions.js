const catchAsync = require("../utils/catchAsync")
const questionsModel = require("../models/questions")
const fetchQuestions = questionsModel.fetchQuestions
const fetchQuestion = questionsModel.fetchQuestion

const questions = catchAsync(async (req, res)  => {
    const questions = await fetchQuestions()
    res.satus(httpStatus.OK).send(questions)
})

module.exports = questions