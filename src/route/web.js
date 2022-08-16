import express from "express";
import homeController from '../controller/homeController'
const route = express.Router();

const initWebRoute = (app)=>{
    route.get('/about', homeController.getHomeController);
    route.get('/', (req, res) => {
        res.send('Hello World')
    });
    return app.use('/', route)
}

module.exports = initWebRoute;