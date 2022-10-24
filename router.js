const hello = require('./controllers/index');
const contactUs = require('./controllers/nodemailer');
const auth = require('./controllers/auth');

const router = require('express').Router();

router.post('/sign-in', auth.signin);
router.post('/sign-up', auth.signup);

router.get('/hello', hello);
router.post('/contact', contactUs);

module.exports = router;
