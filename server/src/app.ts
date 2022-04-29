import globalRouter from './routers/globalRouter';
import express from 'express';
import morgan from 'morgan';
import boardRouter from './routers/boardRouter';

const PORT: number = 8070;
const app: express.Express = express();
const logger: express.Handler = morgan('dev'); // 이렇게 쓰는게 맞을까?
app.use(logger);

app.use('/board', boardRouter);
app.use('/', globalRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
