/* eslint-env node */

var FastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-cli-loggly',
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
	this._ensureThisImport();

	this.import ('vendor/loggly-jslogger/loggly.tracker.js');
	this.import ('vendor/shims/loggly.js');
  },
  _ensureThisImport() {
	if (!this.import) {
	  this._findHost = function findHostShim() {
		let current = this;
		let app;

		do {
		  app = current.app || app;
		} while (current.parent.parent && (current = current.parent));
		return app;
	  };
	  this.import = function importShim(asset, options) {
		let app = this._findHost();
		app.import (asset, options);
	  };
	}
  }
};
