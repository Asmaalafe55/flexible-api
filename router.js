const {
  getUserById,
  getUserByEmail,
  updateUsersDetails,
} = require("./controllers/users.controllers.js");
const hello = require("./controllers/index");
const contactUs = require("./controllers/nodemailer");
const auth = require("./controllers/auth");

const router = require("express").Router();

router.post("/sign-in", auth.signin);
router.post("/sign-up", auth.signup);
router.get("/user-by-id", getUserById);
router.get("/user-by-email", getUserByEmail);
router.get("/update-users-details", updateUsersDetails);

router.get("/hello", hello);

router.post("/contact", contactUs);
module.exports = router;
