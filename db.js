const { Pool } = require('pg');
const express = require('express')

const app = express();

const pool = new Pool({
  user: 'postgres',
  password: 'micin2',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'postgres'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};


