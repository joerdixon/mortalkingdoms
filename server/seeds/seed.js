const sequelize = require('../config/connection')
const { Character, Artifact, Faction } = require('../models')

const characterData = require('./characterData.json');
const artifactData = require('./artifactData.json');
const factionData = require('./factionData.json');

async function seedMK() {
    await sequelize.sync({ force: true });
    const factions = await Faction.bulkCreate(factionData);
    const characters = await Character.bulkCreate(characterData);
    const artifacts = await Artifact.bulkCreate(artifactData);
}

seedMK();