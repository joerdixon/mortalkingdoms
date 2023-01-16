const sequelize = require('../config/connection')
const { Character, Artifact, Location } = require('../models')

const characterData = require('./characterData.json');
const artifactData = require('./artifactData.json');
const locationData = require('./locationData.json');

const characters = Character.bulkCreate(characterData);
const artifacts = Artifact.bulkCreate(artifactData);
const locations = Location.bulkCreate(locationData);