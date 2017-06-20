(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['_LTracker'],
      __esModule: true
    };
  }

  define('loggly', [], vendorModule);
})();
