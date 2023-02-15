const { parseSeedPhrase, generateSeedPhrase } = require("near-seed-phrase");

const { seedPhrase, publicKey, secretKey } = generateSeedPhrase();

console.log("seed phrase: %s", seedPhrase);
console.log("public key: %s", publicKey);
console.log("secret key: %s", secretKey);
