import { Optional } from 'sequelize';

interface CreateBoardType {
    id: number;
    boardImg: string;
    content: string;
    views: number;
    rating: number;
  }

  export interface CreateBoardTypeInput extends Optional<CreateBoardType, 'id'> {}
  export interface CreateBoardTypeOuput extends Required<CreateBoardType> {}