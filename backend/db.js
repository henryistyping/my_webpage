const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Lettermark123!",
    host: "localhost",
    port: 5432,
    database: "mywebsite"

});

module.exports = pool;