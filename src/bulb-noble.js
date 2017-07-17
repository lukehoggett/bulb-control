const noble = require('noble');
const log = require('./logger');

const CANDLE 

class BulbNoble {
  constructor() {
    // start noble
    this.init();
  }

  init() {
    if (noble.state === 'poweredOn') {
      this.startScanning();
      // webContents.send(C.IPC_SCANNING_START);
    } else {
      log.warn(`Cannot scan as the Bluetooth adapter is: ${noble.state}`);
      noble.on('stateChange', (state) => {
        log.debug('state change', state);
        this.init();
      });
    }

    this.discover();
  }

  startScanning() {
    log.debug('starting scanning');
    noble.startScanning();
  }

  stopScanning() {
    log.debug('stoping scanning');
    noble.stopScanning();
  }

  discover() {
    console.debug('Noble: Discover');
    noble.on('discover', function(peripheral) {
      log.debug('Found device with local name: ' + peripheral.advertisement.localName);
      log.debug('advertising the following service uuid\'s: ' + peripheral.advertisement.serviceUuids);
      
      // check for playbulb device to see if we should record it's existence
      
    });
  }
  
  connect(peripheral) {
    console.debug('Noble: Connect');
    peripheral.connect(error => {
      if (error) {
        log.error('connect error', error);
      }
      // update peripheral in store
      console.log('connected to peripheral: ' + peripheral.uuid);
    });
  }
  
  disconnect(peripheral) {
    peripheral.disconnect(error => {
      if (error) {
        log.error('disconnect error', error);
      }
      // update peripeheral in store
      console.log('disconnected from peripheral: ' + peripheral.uuid);
    }
  }
}

module.exports = BulbNoble;
