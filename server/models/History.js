// History

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class History extends Model {}

History.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  },
  {
    sequelize,
  }
);

module.exports = History;