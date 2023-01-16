// Artifacts

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Artifact extends Model {}

Artifact.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    // Age in years
    age: {
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.TEXT,
    },
    power: {
        type: DataTypes.INTEGER,
    },
    owner: {
        type: DataTypes.STRING,
        allowNull: true
    }

  },
  {
    sequelize,
  }
);

module.exports = Artifact;