const sendMail = require("../utils/Nodemailer");

const contactUs = (req, res) => {
  console.log(req.body)

  sendMail()
  res.send("succes")
};

module.exports = contactUs;
