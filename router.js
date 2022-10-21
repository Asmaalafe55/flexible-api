const {
  getUserById,
  getUserByEmail,
  updateUsersDetails,
} = require('./controllers/users.controllers.js');
const router = require('express').Router();

router.get('/user-by-id', getUserById);
router.get('/user-by-email', getUserByEmail);
router.get('/update-users-details', updateUsersDetails);

router.get('/hello', (req, res) => {
  res.send('hello');
});

module.exports = router;
