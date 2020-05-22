const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: false
    },
    username: {
      type: DataTypes.CHAR(128),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "username",
      autoIncrement: false,
      unique: "auth_username"
    },
    email: {
      type: DataTypes.CHAR(128),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "email",
      autoIncrement: false,
      unique: "auth_email"
    },
    password: {
      type: DataTypes.CHAR(365),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "password",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "auth",
    comment: "",
    indexes: []
  };
  const AuthModel = sequelize.define("auth_model", attributes, options);
  return AuthModel;
};
