const config = require('config');
const winston = require('winston');

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console(config.app.logger)
  ]
});

module.exports = logger;