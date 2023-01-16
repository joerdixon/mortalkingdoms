// Characters (People)

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Character extends Model { }

Character.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // First and/or Last
        name: {
            type: DataTypes.STRING,
        },
        // Abyssal Liege, Hallowed One, the Great, etc...
        epitaph: {
            type: DataTypes.STRING,
        },
        // Age in years.
        age: {
            type: DataTypes.INTEGER,
        },
        // Character description
        description: {
            type: DataTypes.TEXT
        },
        // Height in inches (and meters?)
        height: {
            type: DataTypes.INTEGER,
        },
        // Weight in pounds (and meters?)
        weight: {
            type: DataTypes.INTEGER,
       f },
        // Who are they closely affiliated with.
        affiliation: {
            type: DataTypes.STRING,
        },
        // Are they a player character?
        pc: {
            type: DataTypes.BOOLEAN,
        }
    },
    {
        sequelize,
    }
);

module.exports = Character;
