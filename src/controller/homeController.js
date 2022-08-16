import mysql from "mysql2/promise";

const getHomeController = async (req, res )=>{
    // const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'learnodejs'});
    const connection = await mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'learnodejs',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
    const [rows] = await connection.execute('SELECT * FROM `users`')
    res.render('index.ejs', {data: rows})
}
module.exports = {
    getHomeController
}