import { Model, Sequelize, DataTypes } from 'sequelize';
export default class User extends Model {
  public id?: number;
  public name!: string;
  public email!: string;
  public birthdate?: Date;
  public username?: string;
}
export const UserMap = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING(255),
      },
      date_of_birth: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      username: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      tableName: 'users',
      timestamps: false,
    }
  );
  User.sync();
};
