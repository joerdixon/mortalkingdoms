// Characters (People)

// null will be shown as ??? clientside.

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Character extends Model { }

Character.init(
    {
        // Sequelize gives us an id by default so we don't need to define it in the model.

        // First and/or Last
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Abyssal Liege, Hallowed One, the Great, etc... Some people don't have one.
        epitaph: {
            type: DataTypes.STRING,
            allowNull: true
        },
        // Age in years.
        age: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        // Character description
        desc: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        // Height in inches (and meters?)
        height: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        // Weight in pounds (and meters?)
        weight: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        // Are they a player character?
        pc: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        // Are they still alive.
        alive: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        // How do they make their living (usually just their in-game class)?
        profession: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        sequelize,
        modelName: "character",
        timestamps: false
    }
);

module.exports = Character;
