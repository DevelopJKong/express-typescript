import globalRouter from './routers/globalRouter';
import express, { Express, Handler } from 'express';
import cors from "cors";
import morgan from 'morgan';
import boardRouter from './routers/boardRouter';
import apiRouter from './routers/apiRouter';
import bodyParser from 'body-parser';

const PORT: number = 5000;
const app: Express = express();
const logger: Handler = morgan('dev'); // 이렇게 쓰는게 맞을까?

app.use(logger);
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',apiRouter);
app.use('/board', boardRouter);
app.use('/', globalRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
