const clock = require('./clock');
const db = require('../db/db');
const joel = require('../joel');


module.exports.run = () => {
    db.getCurrentTemperatures()
        .then((model) => {
            let {inside, outside} = model;
            //let newTemp = joel.init(inside, outside);
            //db.setInsideTemp(newTemp);
        })
};