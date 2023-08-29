import User, { UserMap } from '../model/user';
import { sequelize } from '../config/database';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

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
  const hashedPassword = await User.encryptPassword(password);
  const result = await User.create({name: name,
      email: email,
      date_of_birth: date_of_birth,
      username: username,
      password: hashedPassword});
  res.status(201).json({ message: 'User Created successfully', user: result });
};

export const logUserController = async (req: Request, res: Response) => {
  UserMap(sequelize);
  await sequelize.authenticate();
  await sequelize.sync();
  let { email, password} = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }
  const passwordMatch = await User.validatePassword(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid password' });
  }
  const token = jwt.sign({ userId: user.id }, `${process.env.SECRET_TOKEN}`, {
    expiresIn: '1h',
  });

  res.status(200).json({ message: 'User logged in successfully', token });
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