import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


// const express = require('express');
// const db = require('./db/db');
// const config = require('./cfg/config_default');
// const app = express();

// // set up static files server (client-side js, css, images, etc.)
// app.use(express.static('public'));

// // root or /name of app
// app.get('/', (req, res) => {
//     res.render('hello.html', {yourName: 'World'});
// });

// // test for sending parameters through url
// app.get('/hello/:name', (req, res) => {
//     console.log('received request')
//     res.render('hello.html', {yourName: req.params.name});
// });


// // test for database access
// app.get('/dbtest', (req, res) => {
//     db.query(`
//     select *
//     from
//     ( values
//       (1, $1::int)
//     , (2, $2)
//     ) x(id, val)
//     `, 'hello', 'world'
//     ).then((model) => {
//         res.render('dbtest.html', model);
//     }).catch((err) => {
//         res.send(`${err}`);
//     });
// });

// app.listen(config.http.port, () => console.log(`Listening on port ${config.http.port}...`));
