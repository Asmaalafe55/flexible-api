const userModel = require('../models/users.model');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

const getUserById = catchAsync(async (req, res) => {
  const id = req.body.id;
  if (!id) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Missing data');
  }
  const result = await userModel.getUserById(id);
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Data does not exist');
  }
  res.status(httpStatus.OK).send(result);
});

const getUserByEmail = catchAsync(async (req, res) => {
  const email = req.body.email;
  if (!email) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Missing data');
  }
  const result = await userModel.getUserByEmail(email);
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Data does not exist');
  }
  res.status(httpStatus.OK).send(result);
});

const updateUsersDetails = catchAsync(async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  if (!email || !first_name || !last_name || !password) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Missing data');
  }
  const result = await userModel.updateUsersDetails(
    first_name,
    last_name,
    email,
    password
  );
  if (!result) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Failed to update user details');
  }
  res.status(httpStatus.OK).send(result);
});

module.exports = {
  getUserById,
  getUserByEmail,
  updateUsersDetails,
};
