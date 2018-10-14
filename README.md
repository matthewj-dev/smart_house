# Capstone Project
### Branwin, Jared, Joel, Hayden, and Matt

# How to Set Up
1. Make a new file called *config_override.js* in *src/cfg* and copy the contents of *config_override_example.js* replacing username and password with yours. 
1. Install [Node.js](https://nodejs.org/en/download/current/)
1. Run `npm install`
1. Run `sudo npm install -g nodemon` _OPTIONAL_
1. Run `node server.js` or `nodemon server.js` (Scans for changes)
1. Run `npm start`
1. Open browser and go to [http://localhost:8080] to see server responses.

* Make sure to set up ssh tunnel or local PostgreSQL database to use database stuff. To set up the tunnel (for port 5433) use:

```
ssh -L 5433:cisdb:5432 blazerid@moat.cis.uab.edu
```
