import express from 'express';
import { first } from '../controllers/apiController';
const apiRouter = express.Router();

apiRouter.get("/",first);

export default apiRouter;
