// Artifacts here is a quick change

// null will be shown as ??? clientside.

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Artifact extends Model { }

Artifact.init(
  {
    // Sequelize gives us an id by default so we don't need to define it in the model.

    // Name of the artifact
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Object if it was nonmagical. Shield, staff, warship, flask, etc
    shape: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Age in years
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // Description of the item, it's purpose, and what it does.
    desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // Who originally made this item?
    createdBy: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "artifact",
    timestamps: false
  }
);

module.exports = Artifact;