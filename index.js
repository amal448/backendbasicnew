import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/frameworks/database/mongoDB/mongoConnection.js";
import routes from "./src/frameworks/webserver/routes/index.js";
// import errorHandlingMiddleware from "./src/frameworks/webserver/middlewares/errorHandlingMiddleware";
import cors from "cors";
import helmet from "helmet";
import { expressConfig } from "./src/Frameworks/webserver/express.js";

dotenv.config({ path: ".env" });

const app = express();

app.use(cors());

app.use(helmet());

//-----Database Connection-----//

connectDB();

//------express configuration------//

expressConfig(app);

//routes for each endpoints

routes(app);

// app.use(errorHandlingMiddleware);

// catch 404 and forward to error handler

app.all("*", (req, res, next) => {
    res.status(404).json({message:"route is not found"})  
    next();
});

serverConfig(app).startServer();
