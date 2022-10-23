const userModel = require('../models/users.model');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const signin = async (req, res) => {
  const { email, password } = (req.body.email, req.body.password);
  if (!email || !password) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Missing data');
  }
  const result = await userModel.getUserByEmail(email);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  } else if (result.password != password) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is wrong');
  }
  res.status(httpStatus.OK).send(result);
};

const signup = async (req, res) => {
  const { first_name, last_name, email, password } =
    (req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.password);
  if (!first_name || !last_name || !email || !password) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Missing data');
  }
  const result = await userModel.getUserByEmail(email);
  if (result) {
    throw new ApiError(httpStatus.FOUND, 'User is exist');
  }
  const result1 = await userModel.createNewUser(
    first_name,
    last_name,
    email,
    password
  );
  if (result1) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Something goes wrong');
  }

  res.status(httpStatus.OK).send(result1);
};

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
