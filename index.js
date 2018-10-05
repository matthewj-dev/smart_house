const express = require('express');
const mustache = require('mustache-express');
const { Client } = require('pg')
const config = require('./cfg/config_default');
const app = express();

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + config.http.views);

// set up static files server (client-side js, css, images, etc.)
app.use(express.static('public'));


/*
    EXPRESS SERVER IS NOW SET UP :)
    BELOW I'LL SET UP DATABASE CONNECTION
*/
const client = new Client({
    host: config.db.host,
    port: config.db.port,    
    database: config.db.dbname,
    user: config.db.user,
    password: config.db.password
});




// root or /name of app
app.get('/', (req, res) => {
    res.render('hello.html', {yourName: 'World'});
});

// test for sending parameters through url
app.get('/hello/:name', (req, res) => {
    console.log('received request')
    res.render('hello.html', {yourName: req.params.name});
});


// test for database access
app.get('/dbtest', (req, res) => {
    client.connect()  // connect to db
    const rs = client.query('select id, val from smarthouse.test', (err, rs) => {
        // render template with result set (rs)
        // rs looks like:
        /*
            [
                {
                    "id": 1,
                    "val": "hello"
                },
                {
                    "id": 2,
                    "val": "world"
                }
            ]
        */
        res.render('dbtest.html', rs);
    });
});

app.listen(config.http.port, () => console.log(`Listening on port ${config.http.port}...`));