const RandomEvent = require('./random_event');
const RandomWeeklyEvent = require('./random_weekly_event');

const db = require('../db/db');
const engine = require('./engine');

// for daily random events
db.randomEventsInfo()
    .then(randomEventInfo => {
        // create RandomEvents from the database event information
        let events = randomEventInfo.map(obj => 
            new RandomEvent(
                obj.obj_id,
                obj.duration,
                obj.duration_deviation,
                obj.weekday_frequency,
                obj.weekend_frequency
            )
        );

        // poll every 3 seconds for events to fire
        setInterval(() => {
            events.forEach(e => e.fireEvent());
        }, 3 * 1000); // run every 3 seconds
    })
    .catch(err => {
        console.error('FATAL! Could not get random event information from database!');
        console.error(err);
        process.exit(1);
    });


// for weekly random events
db.weeklyRandomEventsInfo()
    .then(randomEventInfo => {
        // create random weekly events from database event information
        let events = randomEventInfo.map(obj =>
            new RandomWeeklyEvent(
                obj.obj_id,
                obj.duration,
                obj.frequency
            )
        );

        // poll every 10 seconds for weekly events to fire
        setInterval(() => {
            events.forEach(e => e.fireEvent());
        }, 10 * 1000); // run every 10 seconds
    })
    .catch(err => {
        console.error('FATAL! Could not get weekly random event infomation from database!');
        console.error(err);
        process.exit(1);
    });