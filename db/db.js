const { Client } = require('pg')
const clock = require('../data_gen/clock');

const connParams = {
    host: "localhost",
    port: 5433,    
    database: "jbarbaze",
    user: "jbarbazeweb",
    password: "jbarbazeweb"
};

/**
 * This is a method to query the database without necessarily needing
 * a special wrapper function for *every* query you need to make.
 * The purpose of this method is to keep managing database connections
 * out of other parts of the code. It also wrap a call to console.error
 * to assist with debugging when an error occurs.
 * @param {string} query Possibly parameterized query to send to database 
 * @param  {...any} args Optional variadic arguments to fill parameters in query
 * @returns {Array} Array of rows returned by query, generally of the form:
 * `[{"col": val, "col2":val}, {}...]`
 */
module.exports = {
    query: async (query, ...args) => {
        let client;
        try {
            client = new Client(connParams);
            client.connect();
            return (await client.query(query, args)).rows;
        }
        catch (err) {
            console.error(`Error querying database! ${err} Query: ${query} Args: ${args}`);
            throw new Error(err); // rethrow the error so it can be caught in the Promise chain
        } finally {
            client.end();
        }
    },

    monthlyBilling: async () => {
        let client;
        try {
            client = new Client(connParams);
            client.connect();
            return (await client.query('select * from monthly_billing')).rows[0].model;
        } catch(err) {
            console.error(`Error retriving monthly billing data! ${err}`);
            throw new Error(err);
        } finally {
            client.end();
        }
    },

    adminPageModel: async () => {
        let client;
        try {
            client = new Client(connParams);
            client.connect();
            return (await client.query('select * from admin_page_model')).rows[0].model;
        } catch(err) {
            console.error(`Error retriving admin page data! ${err}`);
            throw new Error(err);
        } finally {
            client.end();
        }
    },

    dashboardModel: async () => {
        let client;
        try {
            client = new Client(connParams);
            client.connect();
            return (await client.query('select * from dashboard_model($1::timestamptz) as model', [clock.now()])).rows[0].model;
        } catch(err) {
            console.error(`Error retriving dashboard model data! ${err}`);
            throw new Error(err);
        } finally {
            client.end();
        }
    },

    powerConsumptionByCategory: async () => {
        let client;
        try {
            client = new Client(connParams);
            client.connect();
            return (await client.query('select * from power_consumption_by_category($1::timestamptz) as model', [clock.now()])).rows[0].model;
        } catch(err) {
            console.error(`Error retriving admin page data! ${err}`);
            throw new Error(err);
        } finally {
            client.end();
        }
    },

    runningMonthlyPowerTotal: async () => {
        let client;
        try {
            client = new Client(connParams);
            client.connect();
            return (await client.query('select * from running_monthly_power_total($1::timestamptz) as total', [clock.now()])).rows[0].total;
        } catch(err) {
            console.error(`Error retriving monthly total! ${err}`);
            throw new Error(err);
        } finally {
            client.end();
        }
    },

    expensesLog: async () => {
        let client;
        try {
            client = new Client(connParams);
            client.connect();
            return (await client.query('select * from expenses_log($1::timestamptz) as model', [clock.now()])).rows[0].model;
        } catch(err) {
            console.error(`Error retriving expenses log! ${err}`);
            throw new Error(err);
        } finally {
            client.end();
        }
    },

    getCurrentTemperatures: async () => {
        let client;
        try {
            client = new Client(connParams);
            client.connect();
            return (await client.query('select * from get_current_temperatures($1::timestamptz) as model', [clock.now()])).rows[0].model;
        } catch(err) {
            console.error(`Error retriving random event data! ${err}`);
            throw new Error(err);
        } finally {
            client.end();
        }
    },

    setInsideTemp: async (temp) => {
        let client;
        try {
            client = new Client(connParams);
            client.connect();
            return (await client.query('insert into temperature (temp_time, is_outside_temp, val) values ($1::timestamptz, false, $2)', [clock.now(), temp]));
        } catch(err) {
            console.error(`Error retriving random event data! ${err}`);
            throw new Error(err);
        } finally {
            client.end();
        }
    },
    
    randomEventsInfo: async () => {
        let client;
        try {
            client = new Client(connParams);
            client.connect();
            return (await client.query('select * from random_events_info')).rows;
        } catch(err) {
            console.error(`Error retriving random event data! ${err}`);
            throw new Error(err);
        } finally {
            client.end();
        }
    },

    weeklyRandomEventsInfo: async () => {
        let client;
        try {
            client = new Client(connParams);
            client.connect();
            return (await client.query('select * from weekly_random_events_info')).rows;
        } catch(err) {
            console.error(`Error retriving random event data! ${err}`);
            throw new Error(err);
        } finally {
            client.end();
        }
    },

    turnOn: async (objId) => {
        let client;
        try {
            client = new Client(connParams);
            client.connect();
            console.log(`Turned on ${objId}`);
            await client.query('update obj set is_on_open = true where obj_id = $1', [objId]);
        } catch(err) {
            console.error(`Error turning object on! ${err}`);
            throw new Error(err);
        } finally {
            client.end();
        }
    },
    turnOff: async (objId) => {
        let client;
        try {
            client = new Client(connParams);
            client.connect();
            console.log(`Turned off obj: ${objId}`);
            await client.query('update obj set is_on_open = false where obj_id = $1', [objId]);
        } catch(err) {
            console.error(`Error turning object on! ${err}`);
            throw new Error(err);
        } finally {
            client.end();
        }
    },

    setThermostat: async (setting, heat) => {
        let client;
        try {
            client = new Client(connParams);
            client.connect();
            await client.query('update thermostat set current_setting = $1, heat = $2', [setting, heat]);
        } catch(err) {
            console.error(`Error turning object on! ${err}`);
            throw new Error(err);
        } finally {
            client.end();
        }
    },


    /*
        DATA GENERATION METHODS
    */
    genPowerConsumption: async (lastRun, now) => {
        let client;
        try {
            client = new Client(connParams);
            client.connect();
            await client.query('select gen_power_consumption($1::timestamptz, $2::timestamptz)', [lastRun, now]);
        } catch(err) {
            console.error(`Error generating general power consumption data! ${err}`);
            throw new Error(err);
        } finally {
            client.end();
        }
    },
}

