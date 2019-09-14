const mysql = require('mysql');
import { DB } from 'constants/'

export const pool = mysql.createPool(DB);

