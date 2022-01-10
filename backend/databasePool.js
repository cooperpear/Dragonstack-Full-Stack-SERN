const { Pool, Client } = require('pg');
const databaseConfiguration = require('./secrets/databaseConfiguration.js');

const pool = new Pool(databaseConfiguration);



module.exports = pool;









