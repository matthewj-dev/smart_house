const { Client } = require('pg')
const config = require('../cfg/config_default');

const connParams = {
    host: config.db.host,
    port: config.db.port,    
    database: config.db.dbname,
    user: config.db.user,
    password: config.db.password
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
module.exports.query = async (query, ...args) => {
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
};

