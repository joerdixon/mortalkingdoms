// Artifacts here is a quick change

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
    // Name of the artifact
    name: {
      type: DataTypes.STRING,
    },
    // Object if it was nonmagical. Shield, staff, warship, flask, etc
    shape: {
      type: DataTypes.STRING,
    },
    // Age in years
    age: {
        type: DataTypes.INTEGER,
    },
    // Description of the item and what it does.
    desc: {
        type: DataTypes.TEXT,
    },
    // Power level? pending...
    power: {
        type: DataTypes.INTEGER,
    },
    // Who controls or has possesion of the item.
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