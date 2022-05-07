import express, { Express, Handler } from 'express';
import "dotenv/config";
import "./db";
import cors from "cors";
import morgan from 'morgan';
import apiRouter from './routers/apiRouter';
import bodyParser from 'body-parser';
import { config } from './config';
import { sequelize } from "./db";

const app: Express = express();
const logger: Handler = morgan('dev'); 

app.use(logger);
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',apiRouter);


sequelize.sync().then(() => {
  console.log("mysql is connecting");
  app.listen(config.port, () => {
    console.log(`http://localhost:${config.port}`);
  })
});