// logging module
const bunyan = require('bunyan');

// import {
//   config
// } from './config';

// configure bunyan logging
let log = bunyan.createLogger({
  name: 'bulb-control',
  level: 'trace'
});

log.level();

module.exports = log;
