const db = require('../db/db');
const clock = require('./clock');

// pull in the formulas:
let formulas = [
    require('./fridge')
];

// run our data generation engine every 15 seconds
setInterval(() => {
    console.log("Starting new iteration of formula engine...");
    // call each of our formulas
    formulas.forEach((formula) => {
        formula();
    });
    console.log("Formula engine completed successfully!");
}, 1000 * 15); 