
import promisePool from "../configs/connectDB";
const getHomeController = async (req, res )=>{
    // const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'learnodejs'});
    const [rows] = await promisePool.execute('SELECT * FROM users')
    res.render('index.ejs', {data: rows})
}
const getDetailController = async (req, res)=>{
    const {userID} = req?.params;
    const [rows] = await promisePool.execute(`SELECT * FROM users WHERE maKH = ?`, [userID ? userID : 1]);
    res.send(JSON.stringify(rows))
}
const getCreateNewUser = async (req, res)=>{
    const {userName, email, address} = req.body;
    await promisePool.execute(`INSERT INTO \`users\`( \`userName\`, \`address\`, \`email\`) VALUES (?,?,?)`,
        [userName,address, email])
    return res.redirect('/about')
}
const deleteUser = async (req, res)=>{
    const {userID} = req.body;
    await promisePool.execute(`DELETE FROM \`users\` WHERE maKH = ?`, [userID])
    return res.redirect('/about')
}


module.exports = {
    getHomeController,
    getDetailController,
    getCreateNewUser,
    deleteUser

}