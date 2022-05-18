import { config } from './../config';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { Board } from './../data/board/board';
import { Request, Response } from 'express';

export const getSeeBoard = async (req: Request, res: Response) => {
  try {
    const boards = await Board.findAll({ order: [['id', 'DESC']] });
    return res.status(200).json(boards);
  } catch (error) {
    return res.status(404).json({ message: '다시 시도해주세요' });
  }
};

export const postWriteBoard = async (req: Request, res: Response) => {
  const { token }: any = req.headers;
  const jwtToken: any = jwt.verify(token, config.jwt.secretKey);
  const { title, content, boardImg } = req.body;
  try {
    const newBoard = await Board.create({
      title,
      content,
      boardImg,
      userId: jwtToken.id,
    });
    return res.status(201).json(newBoard);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: '다시 시도해주세요' });
  }
};
