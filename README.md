# Capstone Project
### Branwin, Jared, Joel, Hayden, and Matt
* [Joel Vance](bamafever615@gmail.com)
* [Jared Chesnut ](red.chesnut@yahoo.com)
* [Hayden Barbazette](hayden.barbazette@gmail.com)
* [Branwin DuBose](branwindubose@gmail.com)
* [Matthew Jackson](mjacks36@outlook.com)

# How to Set Up 
This only needs to be run once to set up your environment.
1. Install [Node.js](https://nodejs.org/en/download/current/)
1. Run `npm install`
1. Run `sudo npm install -g nodemon`

# How to Run the App
1. Run `ssh -L 5433:cisdb:5432 blazerid@moat.cis.uab.edu
1. Run `node run.js`
1. Open browser and go to [http://localhost:3000].

* Make sure to set up ssh tunnel or local PostgreSQL database to use database stuff. To set up the tunnel (for port 5433) use:

```
ssh -L 5433:cisdb:5432 blazerid@moat.cis.uab.edu
```

# Generate Events
```
cd data_gen
node event_gen.js
```