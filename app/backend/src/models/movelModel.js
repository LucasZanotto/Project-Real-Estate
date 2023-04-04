const connection = require('./connection');

const createMovel = async ({name, custo}) => {
  const query = `INSERT INTO RealEstate.propiedades(name, custo) VALUE (?, ?, ?)`;
  const [result] = await connection.execute(query, [name, custo])
}

const findAllMovel = async () => {
  const query = 'SELECT * FROM RealEstate.propiedades';
  const [result] = await connection.execute(query);
  return result;
}

module.exports = {
  findAllMovel,
  createMovel
};