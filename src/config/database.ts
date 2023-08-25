import 'dotenv/config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  database: `${process.env.DATABASE_NAME}`,
  username: `${process.env.DATABASE_USER}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  host: `${process.env.DATABASE_HOST}`,
  port: Number(process.env.DATABASE_PORT),
  dialect: 'postgres',
});
const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export { sequelize, testDbConnection };
