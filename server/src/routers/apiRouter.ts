import express from 'express';
import { first,signup } from '../controllers/apiController';
const apiRouter = express.Router();

apiRouter.get("/",first);
apiRouter.post("/signup",signup)
export default apiRouter;
