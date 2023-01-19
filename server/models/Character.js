// Characters (People)

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Character extends Model { }

Character.init(
    {
        // Sequelize gives us an id by default so we don't need to define it in the model.

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
        desc: {
            type: DataTypes.TEXT
        },
        // Height in inches (and meters?)
        height: {
            type: DataTypes.INTEGER,
        },
        // Weight in pounds (and meters?)
        weight: {
            type: DataTypes.INTEGER,
        },
        // Are they a player character?
        pc: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        sequelize,
        modelName: "character",
        timestamps: false
    }
);

module.exports = Character;
