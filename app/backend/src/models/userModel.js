const connection = require('./connection');

const createUser = async ({name, password, cpf}) => {
  const query = `INSERT INTO RealEstate.user(name, password, cpf) VALUE (?, ?, ?)`;
  const [result] = await connection.execute(query, [name, password, cpf])
}

const findAllUsers = async () => {
  const query = 'SELECT * FROM RealEstate.user';
  const [result] = await connection.execute(query);
  return result;
}

module.exports = {
  findAllUsers,
  createUser
};