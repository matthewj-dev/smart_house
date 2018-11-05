realTimeCache = new Date();
multiplier = 5.0;

module.exports = {
    getTime: () => {
        let now = new Date();
        let diff = now - realTimeCache;
        now.setTime(now.getTime() + (diff * multiplier));
        return now;
    }
}