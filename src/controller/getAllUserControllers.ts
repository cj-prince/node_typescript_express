import User, { UserMap } from '../model/user';
import { sequelize } from '../config/database';
import { Request, Response } from 'express';

export const getAllUserControllers = async (req: Request, res: Response) => {
  UserMap(sequelize);
  await sequelize.authenticate();
  await sequelize.sync();
  const result = await User.findAll();
  res.status(200).json({ users: result });
};
