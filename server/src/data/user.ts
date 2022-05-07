import SQ, { Optional } from 'sequelize';
import { sequelize } from '../db';
const DataTypes = SQ.DataTypes;

interface CreateType {
  id: number;
  username: string;
  password: string;
  name: string;
  email: string;
  url: string;
}
export interface CreateTypeInput extends Optional<CreateType, 'id'> {}
export interface CreateTypeOuput extends Required<CreateType> {}

export const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    url: DataTypes.TEXT,
  },
  { timestamps: false }
);

export async function findByUsername(username: string): Promise<CreateTypeOuput> {
  const user = await (await User.findOne({ where: { username } }))?.toJSON();
  return user;
}

export async function createUser(payload: CreateTypeInput): Promise<number> {
  // 여기서 어떻게 더 잘 만들수있는지 생각을 해봐야겠습니다
  const user = await (await User.create(payload)).toJSON();
  return user.id;
}

export async function findAll(obj: any) {
  const user = await User.findAll({ order: [['id', 'DESC']] });
  return user;
}
