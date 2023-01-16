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
    }
  },
  {
    sequelize,
  }
);

module.exports = Artifact;