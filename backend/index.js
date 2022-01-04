// Starter code
// const Dragon = require("./dragon.js");

// const fooey = new Dragon({
//     birthdate: new Date(),
//     nickname: "fooey"
// });

// const baloo = new Dragon({
//     birthdate: new Date(),
//     nickname: "baloo",
//     traits: [{ traitType: 'backgroundColor', traitValue: 'green' }]
// });

// const mimar = new Dragon();
// setTimeout(() => {
//     const gooby = new Dragon();
//     console.log("gooby", gooby);
// }, 3000);


// console.log("fooey", fooey);
// console.log("baloo", baloo);
// console.log("mimar", mimar);
// End Starter Code

// Begin Generation test
// const Generation = require("./generation.js");

// const generation = new Generation();

// console.log("generation: ", generation);

// const gooby = generation.newDragon();

// console.log("gooby: ", gooby);

// setTimeout(() => {
//     const mimar = generation.newDragon();
//     console.log("mimar", mimar);
// }, 15000);
// End Generation Test

// Begin Engine test
const GenerationEngine = require("./engine.js");

const engine = new GenerationEngine();

engine.start();

setTimeout(() => {
    engine.stop();
}, 20000);