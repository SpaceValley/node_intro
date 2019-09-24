const mysql = require('mysql');
import dotenv from 'dotenv'
dotenv.config()


const { DB_USER, DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT } = process.env;


export const pool = mysql.createPool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  port: DB_PORT,
});


