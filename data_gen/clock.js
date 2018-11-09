/** Clock
 *  Author: Branwin DuBose
 *  Purpose: Provide a clock that runs faster than real time for simulation purposes.
 */
let realTimeCache = new Date();
let multiplier = 5.0;

module.exports = {
    now: () => {
        let now = new Date();
        let diff = now - realTimeCache;
        now.setTime(now.getTime() + (diff * multiplier));
        return now;
    }
}