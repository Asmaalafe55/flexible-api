const sendMail = require("../utils/Nodemailer");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");

const contactUs = catchAsync( async (req, res) => {

  const data = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  }

  if (!data.name || !data.email || !data.message) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Missing information")
  }

    const result = await sendMail(data)
    if (!result)
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, "Failed to send message")
    res.send('Message sent successfully')
  })

module.exports = contactUs;
