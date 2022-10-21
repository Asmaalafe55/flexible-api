const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const CLIENT_ID = '929475631938-u7868ocp0llul2788klh6epcofvfumm0.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN ='1//044HYLP--mv6OCgYIARAAGAQSNwF-L9IrB7XWgIq-4JgyImcUCWhMqAG3SVg48VDrghvS8ZX5OtGFwQo4zuqOEHNGiwKXeq8mgcg'

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

async function sendMail(data) {
    try {
        const accessToken = await oAuth2Client.getAccessToken()

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'flexible.test1@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        const mailOptions = {
            from: 'flexibleEmailTest <flexible.test1@gmail.com>',
            to: 'ramiebash@gmail.com',
            subject: "Hello from gmail using API",
            text: 'Hello from Flexible email using API',
            html: '<h1>Hello from Flexible email using API</h1>'
        }

        const result = await transport.sendMail(mailOptions)
        return result
        
    } catch (error) {
        return error
    }
}

module.exports = sendMail

// sendMail().then(result => console.log('Email sent...', result))
// .catch(error => console.log(error.message))

 