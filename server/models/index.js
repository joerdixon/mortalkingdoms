// Model imports
const Character = require('./Character.js');
const Artifact = require('./Artifact.js');
const Faction = require('./Faction.js');

// Factions can have multiple characters, characters belong to thier most relevant faction.
Character.belongsTo(Faction);
Faction.hasMany(Character);

// Artifacts can belong to a character
Artifact.belongsTo(Character);
Character.hasMany(Artifact);

// Export the models.
module.exports = { Character, Artifact, Faction }