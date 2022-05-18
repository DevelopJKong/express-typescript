import { CreateBoardTypeOuput } from './dto/board.dto';
import { User } from './../user/user';
import SQ from 'sequelize';
import { sequelize } from '../../db';
import { Sequelize } from 'sequelize';
const DataTypes = SQ.DataTypes;

export const Board = sequelize.define(
  'board',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    boardImg: {
      type: DataTypes.STRING(200),
      defaultValue: 'https://i.imgur.com/dtuN6qr.png',
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    views: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },

    createdAt: {
      field: 'createdAt',
      type: 'TIMESTAMP',
      defaultValue: SQ.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    updatedAt: {
      field: 'updatedAt',
      type: 'TIMESTAMP',
      defaultValue: SQ.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
  },
  { timestamps: false }
);

Board.belongsTo(User);

const INCLUDE_USER = {
  attributes: [
    'id',
    'text',
    'createdAt',
    'userId',
    [Sequelize.col('user.name'), 'name'],
    [Sequelize.col('user.username'), 'username'],
    [Sequelize.col('user.url'), 'url'],
  ],
  include: {
    model: User,
    attributes: [],
  },
};

