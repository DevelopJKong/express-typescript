import express from 'express';
import { first, userAll } from '../controllers/apiController';
import { login, logout, signup } from '../controllers/userController';
const apiRouter = express.Router();

apiRouter.get("/",first);
apiRouter.get("/user",userAll);
apiRouter.get("/logout",logout);
apiRouter.post("/signup",signup);
apiRouter.post("/login",login);

export default apiRouter;
