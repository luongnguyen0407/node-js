import mysql from "mysql2";


const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'learnodejs',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
const promisePool = pool.promise();

export default promisePool;