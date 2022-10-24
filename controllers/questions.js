const catchAsync = require("../utils/catchAsync")
const questionsModel = require("../models/questions")
const ApiError = require("../utils/ApiError")
const httpStatus = require("http-status")

const questions = catchAsync(async (req, res)  => {
    const questions = await questionsModel.fetchQuestions()
    res.status(httpStatus.OK).send(questions)
})

const questionById = catchAsync(async (req, res)  => {
    const id = req.body.id
    if (!id) 
        throw new ApiError(httpStatus.BAD_REQUEST, "Missing id")
    const question = await questionsModel.fetchQuestionById(id)
    if (!question)
        throw new ApiError(httpStatus.BAD_REQUEST, "No question found with this id")
    res.status(httpStatus.OK).send(question)
})

module.exports = { 
    questions: questions,
    questionById: questionById
}