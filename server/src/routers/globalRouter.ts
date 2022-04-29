import { home } from './../controllers/boardController';
import express, { Router } from "express";

const globalRouter:Router = express.Router();

globalRouter.get("/",home);


export default globalRouter;