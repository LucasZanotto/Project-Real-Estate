const userService = require('../services/userService');

const postUser = async (req, res) => {
  const result = await userService.postUser(req.body);
  return res.status(200).json({message: 'user created successfully'})
};

const getAllUsers = async (req, res) => {
  const result = await userService.getAllUsers();
  return res.status(200).json(result)
};

module.exports = {
  getAllUsers,
  postUser
};