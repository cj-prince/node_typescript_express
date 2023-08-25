import { Model, Sequelize, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt'
export default class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public date_of_birth?: Date;
  public username!: string;
  public password!: string;

  static async encryptPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  static async validatePassword(password: string, encryptPassword: string) {
    return await bcrypt.compare(password, encryptPassword);
  }
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
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'users',
      timestamps: true,
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at', 
    }
  );
  User.sync();
};
