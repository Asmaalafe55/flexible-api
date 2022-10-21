const userModel = require('../models/users.model');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const getUserById = async (req, res) => {
  const id = req.body.id;
  if (!id) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Missing data');
  }
  const result = await userModel.getUserById(id);
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Data does not exist');
  }
  res.status(httpStatus.OK).send(result);
};

const getUserByEmail = async (req, res) => {
  const email = req.body.email;
  if (!email) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Missing data');
  }
  const result = await userModel.getUserByEmail(email);
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Data does not exist');
  }
  res.status(httpStatus.OK).send(result);
};

const updateUsersDetails = async (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const password = req.body.password;
  //should i check first/last name and password????
  if (!email || !first_name || !last_name || !password) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Missing data');
  }
  const result = await userModel.updateUsersDetails(
    first_name,
    last_name,
    email,
    password
  );
  res.status(httpStatus.OK).send(result);
};

module.exports = {
  getUserById,
  getUserByEmail,
  updateUsersDetails,
};
