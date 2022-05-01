import express, { Request, Response, NextFunction } from 'express';

export const home = (req: Request, res: Response) => {
  return res.send('Home');
};

export const getSeeBoard = (req: Request, res: Response) => {
  return res.send('getBoard');
};
