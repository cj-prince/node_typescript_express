import User, { UserMap } from '../model/user';
import { sequelize } from '../config/database';
import { Request, Response } from 'express';

export const getAllUserControllers = async (req: Request, res: Response) => {
  UserMap(sequelize);
  await sequelize.authenticate();
  await sequelize.sync();
  const result = await User.findAll();
  res.status(200).json({ message: 'Users Fetched successfully', users: result });
};

export const createUserController = async (req: Request, res: Response) => {
  UserMap(sequelize);
  await sequelize.authenticate();
  await sequelize.sync();
  let {name, email, date_of_birth, username,password} = req.body;
  const result = await User.create({name: name,
      email: email,
      date_of_birth: date_of_birth,
      username: username,
      password: password});
  res.status(201).json({ message: 'User Created successfully', user: result });
};

export const logUserController = async (req: Request, res: Response) => {
  UserMap(sequelize);
  await sequelize.authenticate();
  await sequelize.sync();
  let { email, password} = req.body;
  const result = await User.create({
    email: email,
    password: password,
  });
  res.status(201).json({ message: 'User Logged In successfully', user: result });
};

export const getSingleUserController = async (req: Request, res: Response) => {
  UserMap(sequelize);
  await sequelize.authenticate();
  await sequelize.sync();
  let { id } = req.params;
  const result = await User.findByPk(id);
  res.status(201).json({ message: 'User Fetched successfully', user: result });
};

export const deleteUserController = async (req: Request, res: Response) => {
  UserMap(sequelize);
  await sequelize.authenticate();
  await sequelize.sync();
  let { id } = req.params;
  const result = await User.destroy({
      where: {
        id: id,
      },
    });

  res.status(201).json({ message: 'User Deleted successfully', user: result });
};