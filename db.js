const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "0000",
    database:"todo",
    host:"localhost",
    port: 5432 ,
});

module.exports = pool;