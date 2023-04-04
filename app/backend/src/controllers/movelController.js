const movelService = require('../services/movelService');

const postMovel = async (req, res) => {
  const result = await movelService.postMovel(req.body);
  return res.status(200).json({message: 'movel created successfully'})
};

const getAllMovels = async (req, res) => {
  const result = await movelService.getAllMovels();
  return res.status(200).json(result)
};

module.exports = {
  postMovel,
  getAllMovels
};