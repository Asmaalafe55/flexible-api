const catchAsync = require("../utils/catchAsync")
const questionsModel = require("../models/questions")
const fetchQuestions = questionsModel.fetchQuestions
const fetchQuestionById = questionsModel.fetchQuestionById

const questions = catchAsync(async (req, res)  => {
    const questions = await fetchQuestions()
    res.satus(httpStatus.OK).send(questions)
})

const questionById = catchAsync(async (req, res)  => {
    const question = await fetchQuestionById()
    res.satus(httpStatus.OK).send(question)
})

module.exports = { 
    questions: questions,
    questionById: questionById
}