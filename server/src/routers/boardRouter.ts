import { getSeeBoard } from './../controllers/boardController';
import express ,{ Router } from 'express';

const boardRouter:Router = express.Router();

boardRouter.get("/",getSeeBoard);

export default boardRouter;

