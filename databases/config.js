let obj = {};
module.exports = {
  "host": process.env.SQL_HOST,
  "port": process.env.SQL_PORT,
  "database": process.env.SQL_DATABASE,
  "username": process.env.SQL_USERNAME,
  "password": process.env.SQL_PASSWORD,
  "dialect": process.env.SQL_DIALECT
};
