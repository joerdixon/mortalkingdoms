// Characters (People)

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Character extends Model {}

Character.init(
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

module.exports = Character;
