'use strict';

const { name } = require('./package');
const FastbootTransform = require('fastboot-transform');

module.exports = {
  name,
  options: {
    nodeAssets: {
      'loggly-jslogger': {
        vendor: {
          srcDir: 'src',
          include: ['loggly.tracker.js'],
          processTree(input) {
            return FastbootTransform(input);
          }
        }
      }
    }
  },
  included() {
    this._super.included.apply(this, arguments);
    
    this.import ('vendor/loggly-jslogger/loggly.tracker.js');
    this.import ('vendor/shims/loggly.js');
  }
};
