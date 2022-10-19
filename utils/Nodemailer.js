const nodemailer = require('nodemailer')

const CLIENT_ID = '929475631938-u7868ocp0llul2788klh6epcofvfumm0.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN ='1//044HYLP--mv6OCgYIARAAGAQSNwF-L9IrB7XWgIq-4JgyImcUCWhMqAG3SVg48VDrghvS8ZX5OtGFwQo4zuqOEHNGiwKXeq8mgcg'

 // create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
