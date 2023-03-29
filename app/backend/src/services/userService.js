const userModel = require('../models/userModel');

const getAllUsers = async () => {
  const result = userModel.findAllUsers();
  return result;
}

module.exports = {
  getAllUsers
};