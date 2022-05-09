import { Request, Response } from 'express';
import * as userRepository from '../data/user/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from './../config';

export async function signup(req: Request, res: Response): Promise<Response> {
  const { username, password, name, email, avatar, socialOnly, regison } = req.body;
  //console.log(username,password,name,email,url);
  //과제
  //try catch 로 감싸주기
  const found = await userRepository.findByUsername(username);
  if (found) {
    return res.status(409).json({ message: `${username} already exists` });
  }
  const hashed = await bcrypt.hash(password, config.bcrypt.saltRounds);
  const userId = await userRepository.createUser({
    username,
    password: hashed,
    name,
    email,
    avatar,
    socialOnly,
    regison,
  });
  const token = createJwtToken(userId);
  return res.status(201).json({ token, username });
}

export async function login(req: Request, res: Response): Promise<Response> {
  //과제
  //try catch 로 감싸주기
  const { username, password } = req.body;
  const user = await userRepository.findByUsername(username);
  console.log(typeof username, typeof password); 
  console.log(username,password);
  console.log(user);
  if (!user) {
    return res.status(401).json({ message: 'Invalid user or password' });
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: 'Invalid user or password' });
  }
  const token = createJwtToken(user.id);
  return res.status(200).json({ token, username });
}

export async function logout(req: Request, res: Response): Promise<void> {
  console.log(req);
  return res.end();
}

function createJwtToken(id: number) {
  return jwt.sign({ id }, config.jwt.secretKey, {
    expiresIn: config.jwt.expiresInSec,
  });
}
