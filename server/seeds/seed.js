const sequelize = require('../config/connection')
const { Character, Artifact, Faction } = require('../models')

const characterData = require('./characterData.json');
const artifactData = require('./artifactData.json');
const factionData = require('./factionData.json');

const characters = Character.bulkCreate(characterData);
const artifacts = Artifact.bulkCreate(artifactData);
const Factions = Faction.bulkCreate(factionData);