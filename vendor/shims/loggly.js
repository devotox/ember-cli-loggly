(function() {
  function vendorModule() {
    'use strict';

    return {
      __esModule: true,
      'default': self['_LTracker'],
      LogglyTracker: self['LogglyTracker']
    };
  }

  define('loggly', [], vendorModule);
})();
