// Factions

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Faction extends Model {}

Faction.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   allowNull: false,
    //   autoIncrement: true
    // },
    // Age in years
    age: {
        type: DataTypes.INTEGER,
    },
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
    continent: {
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