import express from 'express';
import { first, userAll } from '../controllers/apiController';
import { login, signup } from '../controllers/userController';
import boardRouter from './boardRouter';
const apiRouter = express.Router();

apiRouter.use("/boards",boardRouter);

apiRouter.get("/",first);
apiRouter.get("/user",userAll);
apiRouter.post("/register",signup);
apiRouter.post("/login",login);

export default apiRouter;
