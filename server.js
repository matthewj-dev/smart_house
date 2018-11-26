const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./db/db");
const app = express();

// by requiring the engine, we initialize and kick it off to
// run
// const dataGenEngine = require('./data_gen/engine');


app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/getList", (req, res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log("Sent list of items");
});

// test for database access
app.get("/getRoomList", (req, res) => {
  db.query(
    `
    select *
    from room
    `
  )
    .then(model => {
      console.log(model);
      res.json(model);
    })
    .catch(err => {
      // res.send(`${err}`);
    });
});

app.get("/getMonthlyBilling", (req, res) => {
  db.monthlyBilling()
  .then(model => {
    res.json(model);
  });
});

app.get("/adminPageModel", (req, res) => {
  db.adminPageModel()
  .then(model => {
    res.json(model);
  });
});


app.get("/dashboardModel", (req, res) => {
  db.dashboardModel()
  .then(model => {
    res.json(model);
  });
});

app.get("/powerConsumptionByCategory", (req, res) => {
  db.powerConsumptionByCategory()
  .then(model => {
    res.json(model);
  });
});

app.get("/runningMonthlyPowerTotal", (req, res) => {
  db.runningMonthlyPowerTotal()
  .then(total => {
    res.json(total);
  });
});

app.post("/turnOn", (req, res) => {
  db.turnOn(req.body.objId);
  res.end('OK');
});

app.post("/turnOff", (req, res) => {
  db.turnOff(req.body.objId);
  res.end('OK');
});

/**
 * This endpoint expects 2 parameters:
 * setting:numeric (degrees Farenheit to set thermostat for)
 * head:boolean (true for heat, false for AC)
 */
app.post("/setThermostat", (req, res) => {
  if (req.body.setting === undefined || (req.body.heat === undefined)) {
    res.end('BAD REQUEST');
    return;
  }
  db.setThermostat(req.body.setting, req.body.heat);
  res.end('OK');
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
const myPort = process.env.PORT || 8080;
app.listen(myPort, () => console.log(`Listening on port ${myPort}...`));
