import express from "express";
import homeController from '../controller/pageController'
import apiController from '../controller/apiController'
const route = express.Router();

const initWebRoute = (app)=>{
    route.get('/about', homeController.getHomeController);
    route.post('/create-user', homeController.getCreateNewUser);
    route.post('/delete-user', homeController.deleteUser);
    route.get('/detail/user/:userID', homeController.getDetailController);
    route.get('/', (req, res) => {
        res.send('Hello World')
    });
    return app.use('/', route)
}
const initApiRoute = (app)=>{
    route.get('/getUser', apiController.getUser);
    route.get('/createUser', apiController.createUser);
    route.delete('/deleteUser/:userID', apiController.deleteUser);
    route.put('/updateUser', apiController.updateUser);
    return app.use('/api/v1', route)
}

module.exports = {initWebRoute,initApiRoute };