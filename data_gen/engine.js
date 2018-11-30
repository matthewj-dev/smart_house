const db = require('../db/db');
const clock = require('./clock');

// pull in the formulas:
let formulas = [
    require('./gen_power_consumption'),
    //require('./gen_temperature')
];

// run our data generation engine every second
setInterval(() => {
    // call each of our formulas
    formulas.forEach((formula) => {
        formula.run();
    });
}, 1000); 