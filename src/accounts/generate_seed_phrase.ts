const { parseSeedPhrase, generateSeedPhrase } = require("near-seed-phrase");

const { seedPhrase } = generateSeedPhrase();

console.log(seedPhrase);
