import express, { Express, Handler } from 'express';
import "dotenv/config";
import "./db";
import cors from "cors";
import morgan from 'morgan';
import apiRouter from './routers/apiRouter';
import bodyParser from 'body-parser';

const PORT: number = 5000;
const app: Express = express();
const logger: Handler = morgan('dev'); 

app.use(logger);
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',apiRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
