import promisePool from "../configs/connectDB";

const getUser = async (req, res)=>{
    const [rows] = await promisePool.execute('SELECT * FROM users')
    return res.status(200).jsonp({
        message : 'get done',
        data : rows
    })
}
const createUser = async (req, res)=>{
    const {userName, email, address} = req.body;
    if(!userName || !email || !address) return res.status(404).jsonp({message:'err'})
    await promisePool.execute(`INSERT INTO \`users\`( \`userName\`, \`address\`, \`email\`) VALUES (?,?,?)`,
        [userName,address, email])
    return res.status(200).jsonp({
        message : 'create done',
    })
}

const deleteUser = async (req, res)=>{
    const {userID} = req.params;
    if(!userID) return res.status(404).jsonp({message:'err'})
    await promisePool.execute(`DELETE FROM \`users\` WHERE maKH = ?`, [userID])
    return res.status(200).jsonp({
        message : 'delete done',
    })
}
const updateUser = async (req, res)=>{
    const {userName, email, address, id} = req.body;
    if(!userName || !email || !address || !id) return res.status(404).jsonp({message:'err'})
    await promisePool.execute(`UPDATE \`users\` SET \`maKH\`= ?,\`userName\`= ? ,\`address\`= ?,\`email\`= ? WHERE maKH = ?`,
        [id, userName, address, email, id])
    return res.status(200).jsonp({
        message : 'update done',
    })
}
module.exports = {
    getUser,
    createUser,
    deleteUser,
    updateUser
}