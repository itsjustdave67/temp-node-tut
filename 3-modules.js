//CommonJS, every file is a module by default
// Modules - Encapsulated Code (only share minimum)
const names = require(`./4-names`)
console.log(names);
const sayHi = require(`./5-utils`)
console.log(sayHi);
const genericData = require(`./6-alternative flavor`)
console.log(genericData);

require(`./7-mind grenade`)

sayHi(names.susan)
sayHi(names.john)
sayHi(names.peter)