import { Request, Response } from 'express';

export const first = (req:Request,res:Response):object => {
    return res.json({ id : 1 , hello:"hello"});
}