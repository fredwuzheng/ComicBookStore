const Pool = require("pg").Pool;

const pool  = new Pool({
    user: 'fred',
    host: 'localhost',
    database: 'books',
    password: 'test',
    port: 5432,
});

module.exports = pool;