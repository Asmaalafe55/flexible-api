const sendMail = require("../utils/Nodemailer");

const contactUs = (req, res) => {

  const data = {
    email: req.body.email,
    message: req.body.message,
    name: req.body.name
  }

  sendMail(data)
  res.send("succes")
};

module.exports = contactUs;
