const clock = require('./clock');  // faster clock, so we can run similutions in quicker-than-real time
const db = require('../db/db');    // database utility

let lastRunTime = clock.now();

let run = () => {
    let now = clock.now();
    // I preferred to write this data generation in SQL, so go ahead and
    // call out to the gen_fridge database function
    db.genFridge(lastRunTime, clock.now())
        .then(() => {
            // write now as our last run time so we can grab a duration
            // next time we are called by the engine
            lastRunTime = now;
        })
        .catch((err) => {
            console.error(`Failed to generate data for refrigerator! Error: ${err}`);
        });
};

// any formula module *must* export some function so that it may be fun by the engine
module.exports = run;