const mySQL = require("mysql");

const connection = mySQL.createConnection({
  host: "pw2.joaoferreira.eu",
  user: "teresaterroso_pw2_user",
  password: "QNhdHP.~JM,H",
  database: "teresaterroso_pw2",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database!");
});

module.exports = connection;
