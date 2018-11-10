"use strict";

const clock = require('./clock');
const db = require('../db/db');
const randomNormal = require('random-normal');

// assuming all days are 24 hours here.
const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;

/**
 * This class is used to model events for normally closed/off objects.
 */
module.exports = class RandomEvent {

    /**
     * 
     * @param {number} objId
     * @param {number} duration duration in seconds of the event
     * @param {number} durationDeviation deviation of the duration of the event
     * @param {number} weekDayFrequency how many times the event happens per day on weekdays
     * @param {number} weekendFrequency  how many times the event happens per day on the weekends
     */
    constructor(
        objId, duration, durationDeviation, weekDayFrequency, weekendFrequency) {
            this.objId = objId;
            this.duration = duration;
            this.durationDeviation = durationDeviation;
            this.weekDayFrequency = weekDayFrequency;
            this.weekendFrequency = weekendFrequency;
            this.events = [];  // queue of times to run for the next 24 hours
            this._scheduleEvents();  // go ahead and schedule the events
    }

    /**
     * private method
     * plans out events for the new 24 hours
     * `constructor` and `genEvent()` calls this when the `events` queue is empty
     */
    _scheduleEvents() {
        let now = clock.now();
        // number of events to schedule variaes based on the day of the week
        let dow = now.getDay();
        let numberOfEvents = (dow === 0 || dow === 7) ? this.weekendFrequency : this.weekDayFrequency;
        for (let i = 0; i < numberOfEvents; i++) {
            this.events.push(now.getTime() + Math.random() * MILLISECONDS_IN_DAY);
        }
        // sort ascending so we can quickly figure out the next time to run
        // after running, we'll remove it from the queue
        this.events.sort((a, b) => a - b);
    }

    /**
     * public method
     * if there is an event ready to be fire, this method shall fire it
     * it will also set the timer for the close of the event
     */
    fireEvent() {
        let now = clock.now();
        // if we have passed the time of an event without doing it, fire it
        // (this is the normal case when firing an event)
        if (this.events[0] < now.getTime()) {
            // turn the obj on (or open it)
            db.turnOn(this.objId);
            // turn off (or close) obj after normal duration
            let normalDuration = Math.abs(randomNormal({mean: this.duration, dev: this.deviation}));
            setTimeout(() => { 
                db.turnOff(this.objId)
            }, 1000 * (normalDuration / clock.multiplier));
            // remove the event that we just fired
            this.events.splice(0, 1);
            if (this.events.length === 0) this._scheduleEvents();
        }
    }
}