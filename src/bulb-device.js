const log = require('./logger');

class BulbDevice {
  constructor(peripheral) {
    log.debug('Constructing BulbDevice');
    this.peripheral = peripheral;
  }
}

module.exports = BulbDevice;
