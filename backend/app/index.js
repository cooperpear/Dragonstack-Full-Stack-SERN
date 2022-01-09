// Begin Starter code
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

const express = require("express");
const GenerationEngine = require("./generation/engine.js");
const dragonRouter = require("./api/dragon.js");
const generationRouter = require("./api/generation.js");

const app = express();
const engine = new GenerationEngine();

//Cannot use circular routing, therefore express provides "locals"
app.locals.engine = engine;

app.use("/dragon", dragonRouter);
app.use("/generation", generationRouter);

engine.start();




module.exports = app;





