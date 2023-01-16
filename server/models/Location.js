// Locations

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Location extends Model {}

Location.init(
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
  }
);

module.exports = Location;