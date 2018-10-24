#!/bin/env node

const { spawn } = require('child_process');

const server = spawn('nodemon', ['server.js'], {
    stdio: 'inherit' 
});
server.on('error', (e) => {
    console.error('Error from server:');
    console.error(e);
});

const react = spawn('npm', ['start'], {
    stdio: 'inherit'
});
react.on('error', (e) => {
    console.error('Error from react:');
    console.error(e);
});

function shutdown() {
    console.log('\n\nReceived shutdown signal!');
    console.log('Killing server...');
    server.kill();
    console.log('Server killed! Now killing react...');
    react.kill();
    console.log('React killed! Exiting...');
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);