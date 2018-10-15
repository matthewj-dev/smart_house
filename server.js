const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const db = require('./src/db/db');
const config = require('./src/cfg/config_default');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// test for database access
app.get('/getRoomList', (req, res) => {
    db.query(`
    select *
    from room
    `,
    ).then((model) => {
        res.json(model)
    }).catch((err) => {
        // res.send(`${err}`);
    });
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});
const myPort = process.env.PORT || config.http.port;
app.listen(myPort, () => console.log(`Listening on port ${myPort}...`));