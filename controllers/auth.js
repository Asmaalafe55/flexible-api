const userModel = require('../models/users.model');
const ApiError = require('../utils/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const httpStatus = require('http-status');

const SECRET = process.env.SECRET;

const signin = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    throw new ApiError(httpStatus.BAD_REQUEST, 'Missing data!');
  const exists = await userModel.getUserByEmail(email);
  if (!exists)
    throw new ApiError(httpStatus.BAD_REQUEST, "User doesn't exist!");
  const match = bcrypt.compareSync(password, exists.password);
  if (!match) throw new ApiError(httpStatus.BAD_REQUEST, 'Wrong password!');
  const token = jwt.sign(
    { email: exists.email, user_id: exists.user_id },
    SECRET
  );
  res.status(httpStatus.OK).send({
    status: 'success',
    username: exists.username,
    access_token: token,
  });
});

const signup = catchAsync(async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  if (!first_name || !last_name || !email || !password)
    throw new ApiError(httpStatus.BAD_REQUEST, 'Missing data!');
  const exists = await userModel.getUserByEmail(email);
  if (!!exists)
    throw new ApiError(httpStatus.BAD_REQUEST, 'User already exists!');
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  const result = await userModel.createNewUser(
    first_name,
    last_name,
    email,
    hash
  );
  if (!result) throw new ApiError(500, 'There was an error!');
  res.status(httpStatus.OK).send({ result, status: 'success' });
});

module.exports = {
  signin,
  signup,
};

/**
- Add route for signup
- Add route for signin
- Add 'auth.js' controller 
- In controller add signin and signup function (with catchSync like the nodemailer controller)
- have a users.js model
- Signup check for the data if it's wrong send back a response with status 400 
   if correct hash the password with bcrypt and use a model function to insert the user into the database then sends response
- Signin checks if data is given if yes use a model function to select the user (by username or email) and then compare the passwords

if do not compare sends response with status 401 if correct create a token with jwt (the jwt payload would contain the email or username)
and send the token in the response
*/
