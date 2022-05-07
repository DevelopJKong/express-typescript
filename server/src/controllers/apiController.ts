import { config } from './../config';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import * as userRepository from '../data/user';

export const first = (req: Request, res: Response): object => {
  return res.json({ id: 1, hello: 'hello' });
};

export async function userAll(req: Request, res: Response): Promise<Response> {
  const user = await userRepository.findAll({});
  console.log(user, 'server');
  return res.status(200).json(user);
}

function createJwtToken(id: number) {
  return jwt.sign({ id }, config.jwt.secretKey, {
    expiresIn: config.jwt.expiresInSec,
  });
}
