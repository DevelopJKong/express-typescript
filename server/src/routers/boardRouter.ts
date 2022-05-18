import { getSeeBoard, postWriteBoard } from './../controllers/boardController';
import express from 'express';


const boardRouter = express.Router();

boardRouter.route("/").get(getSeeBoard);
boardRouter.route("/write").post(postWriteBoard);


export default boardRouter;