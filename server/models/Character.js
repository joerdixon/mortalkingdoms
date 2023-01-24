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
        // Abyssal Liege, Hallowed One, the Great, etc... Some people don't have one.
        epitaph: {
            type: DataTypes.STRING,
            allowNull: true
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
        // Are they still alive.
        alive: {
            type: DataTypes.BOOLEAN,
        },
        // How do they make their living?
        profession: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        modelName: "character",
        timestamps: false
    }
);

module.exports = Character;
