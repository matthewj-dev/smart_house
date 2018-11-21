const RandomEvent = require('./random_event');
const clock = require('./clock');

// assuming all days are 24 hours here.
const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24 * 7;

module.exports = class RandomWeeklyEvent extends RandomEvent {
    constuctor(objId, duration, frequency) {
        this.objId = objId;
        this.duration = duration;
        this.durationDeviation = 0; // all of these weekly events are based off of real objects that run on timers and shouldn't deviate
        this.frequency = frequency;
        this.events = [];
        this._scheduleEvents();
    }
    
    /**
     *  override the `_scheduleEvents` method to work for a whole week rather than daily
     *  private method to plan out events for the next week
     */
    _scheduleEvents() {
        let now = clock.now();
        for (let i = 0; i < this.frequency; i++) {
            this.events.push(now.getTime() + Math.random() * MILLISECONDS_IN_WEEK);
        }
        // sort ascending so we can quickly figure out the next time to run
        // after running, we'll remove it from the queue
        this.events.sort((a, b) => a - b);
    }

    // don't need to override the `fireEvent` method
}