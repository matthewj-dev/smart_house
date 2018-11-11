const db = require('../db/db');
const clock = require('./clock');

// pull in the formulas:
let formulas = [
    require('./gen_power_consumption')
];

// run our data generation engine every 3 seconds
setInterval(() => {
    console.log("Starting new iteration of formula engine...");
    // call each of our formulas
    formulas.forEach((formula) => {
        formula.run();
    });
    console.log("Formula engine completed successfully!");
}, 1000 * 3); 