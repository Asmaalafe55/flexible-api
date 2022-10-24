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
