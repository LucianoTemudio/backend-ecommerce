import "dotenv/config.js"
import express from "express"
import router from "./src/routers/index.router.js";
import morgan from 'morgan';
import cors from 'cors';
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import {engine} from "express-handlebars";
import __dirname from "./utils.js";
import dbConnect from "./src/utils/db.util.js";

try {
    const server = express();
    const port = process.env.PORT || 8080;
    const ready = async () => {
        console.log("server ready on port " + port);
        await dbConnect();
    }
    
    server.listen(port, ready);

    server.use(express.urlencoded({ extended: true }))
    server.use(express.json());
    server.use(morgan("dev"));
    server.use(cors());
    server.use("/public",express.static("public"))

    server.engine("handlebars", engine());
    server.set("view engine", "handlebars");
    server.set("views", __dirname + "/src/views");



    server.use(router);
    server.use(errorHandler);
    server.use(pathHandler);

} catch (error) {
    console.log(error);
}
