import express from "express";
import configViewEngine from "./configs/viewEngine";
import initRoute from  "./route/web"

require('dotenv').config();
const app = express()
const port = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//confnfig viewengine

configViewEngine(app);

initRoute.initWebRoute(app);
initRoute.initApiRoute(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})