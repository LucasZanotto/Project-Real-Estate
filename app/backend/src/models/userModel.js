const connection = require('./connection');

const findAllUsers = async () => {
  const query = 'SELECT * FROM RealEstate.user';
  const [result] = await connection.execute(query);
  return result;
}

module.exports = {
  findAllUsers
};