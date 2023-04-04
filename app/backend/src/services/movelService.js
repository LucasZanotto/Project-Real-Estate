const movelModel = require('../models/movelModel');

const postMovel = async (body) => {
  const result = movelModel.createMovel(body);
  return result;
}

const getAllMovels = async () => {
  const result = movelModel.findAllMovel();
  return result;
}

module.exports = {
  postMovel,
  getAllMovels
};