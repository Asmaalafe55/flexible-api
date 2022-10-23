const hello = require('./controllers/index');
const contactUs = require('./controllers/nodemailer');
const contactUs = require('./controllers/nodemailer');
const signin = require('./controllers/auth');
const signup = require('./controllers/auth');

const router = require('express').Router();

router.get('/sign-in', signin);
router.get('/sign-up', signup);

router.get('/hello', hello);
router.post('/contact', contactUs);

module.exports = router;
