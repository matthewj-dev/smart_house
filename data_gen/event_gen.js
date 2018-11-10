const RandomEvent = require('./random_event');

let events = [
    // back door
    new RandomEvent(34, 30, 15, 16, 32),
    
    // front door
    new RandomEvent(35, 30, 15, 16, 32),
]

// poll every 3 seconds for events to fire
setInterval(() => {
    events.forEach(e => e.fireEvent());
}, 3 * 1000); // run every 3 seconds