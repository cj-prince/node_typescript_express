import User, { UserMap } from '../model/user';
import { sequelize } from '../config/database';
import { Response } from 'express';

export const getAllUserControllers = async (req: Request, res: Response) => {
  UserMap(sequelize);
  const result = await User.findAll();
  res.status(200).json({ users: result });
};
