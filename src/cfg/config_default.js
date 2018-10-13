let cfg = require('./config_override')

// http
cfg.http = cfg.http || {};  // create http cfg if it doesn't exist
cfg.http.port = 8080;
cfg.http.views = '/views';
cfg.http.static = 'public';

// db
cfg.db = cfg.db || {};  // create the db cfg if it doesn't exit
// you need to have db.user and db.password in your override config
cfg.db.host = 'localhost';  // really going through an ssh tunnel here
cfg.db.dbname = 'capstone_team1';
cfg.db.port = 5433;  // this is not the default postgres port (going through ssh tunnel)

module.exports = cfg