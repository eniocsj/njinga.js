'use strict';
module.exports = (sequelize, Sequelize) => {
  const auth = sequelize.define(
    'auth',
    {
      id: {
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        allowNull: false,
        unique: true
      },
      username: {
        type: Sequelize.DataTypes.STRING(64),
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.DataTypes.STRING(64),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: Sequelize.DataTypes.STRING(128),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE
      }
    },
    {
      sequelize,
      freezeTableName: true,
      tableName: 'auth'
    }
  );
  auth.associate = function(models) {
  };
  return auth;
};