var express = require('express');
var app = express();

var mustacheExpress = require('mustache-express');
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// set up static files server (client-side js, css, images, etc.)
app.use(express.static('public'));


/*
    EXPRESS SERVER IS NOW SET UP :)
    BELOW I'LL SET UP DATABASE CONNECTION
*/
const { Client } = require('pg');
const client = new Client({
    user: 'bduboseweb',
    host: 'localhost', // really cisdb, going through tunnel
    database: 'bdubose',
    password: 'bduboseweb',
    port: 5433 // this is not the default postgres port (5432), going through tunnel
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

var port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));