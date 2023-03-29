const userModel = require('../models/userModel');

const postUser = async (body) => {
  const result = userModel.createUser(body);
  return result;
}

const getAllUsers = async () => {
  const result = userModel.findAllUsers();
  return result;
}

module.exports = {
  getAllUsers,
  postUser
};