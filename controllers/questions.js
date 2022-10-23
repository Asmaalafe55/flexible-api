const catchAsync = require("../utils/catchAsync")
const fetchQuestions = require("../models/questions")

const questions = catchAsync(async (req, res)  => {
    const questions = await fetchQuestions()

    res.satus(httpStatus.OK).send(questions)
})

module.exports = questions