// Factions

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Faction extends Model {}

Faction.init(
  {
    // Sequelize gives us an id by default so we don't need to define it in the model.

    // Age in years
    age: {
        type: DataTypes.INTEGER,
    },
    // What is the name of this faction?
    name: {
      type: DataTypes.STRING,
    },
    // Description of the land and a summary of its inhabitants.
    desc: {
        type: DataTypes.TEXT,
    },
    // How many people live here?
    pop: {
        type: DataTypes.INTEGER,
    },
    // Which continent are we in?
    region: {
        type: DataTypes.STRING,
        allowNull: true
    }
  },
  {
    sequelize,
    modelName: "faction",
    timestamps: false
  }
);

module.exports = Faction;