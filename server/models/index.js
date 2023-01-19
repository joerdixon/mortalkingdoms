// Model imports
const Character = require('./Character.js');
const Artifact = require('./Artifact.js');
const Faction = require('./Faction.js');

// Factions can have multiple characters, characters belong to thier most relevant faction.
Faction.hasMany(Character);
Character.belongsTo(Faction);

// Artifacts can belong to a character
Character.hasMany(Artifact);
Artifact.belongsTo(Character);

// Export the models.
module.exports = { Character, Artifact, Faction }