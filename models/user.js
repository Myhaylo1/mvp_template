'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstName: {
      type: DataTypes.STRING,
      field: 'first_name',
      validate: {
        notNull: true,
      }
    },
    lastName: {
      type: DataTypes.STRING,
      field: 'last_name',
      validate: {
        notNull: true,
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notNull: true,
      }
    },
    birthday: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true,
        isBefore(v){
          if (isAfter(new Date(v), new Date)){
            throw new Error('birthday value can\'t be in the future')
          }
        }
      }
    },
    isMale: {
      type: DataTypes.BOOLEAN,
      field: 'is_male',
    },
    passwordHash: {
      type: DataTypes.TEXT,
      field: 'password_hash',
      allowNull: false,
    }
  }, {
    sequelize,
      modelName: 'User',
      tableName: 'users',
      underscorpe: true,
  });
  return User;
};