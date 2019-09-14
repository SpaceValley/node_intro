import { pool } from 'db'

export const queryDb = sql => new Promise((resolve, reject) => {
    pool.query(sql, (err, res) => {
        if(err) return reject(err);
        resolve(res)
    })
});