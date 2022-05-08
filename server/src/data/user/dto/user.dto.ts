import { Optional } from 'sequelize';

interface CreateType {
    id: number;
    username: string;
    password: string;
    name: string;
    email: string;
    avatar: string;
    regison: string;
    socialOnly: boolean;    
  }

  export interface CreateTypeInput extends Optional<CreateType, 'id'> {}
  export interface CreateTypeOuput extends Required<CreateType> {}