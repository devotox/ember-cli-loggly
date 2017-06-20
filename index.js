/* eslint-env node */

const path = require('path');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-loggly',
  included() {
    this._super.included.apply(this, arguments);
    this._ensureThisImport();

    this.import('vendor/loggly.tracker.js');
    this.import('vendor/shims/loggly.js');
  },
  treeForVendor(vendorTree) {
    let logglyTree = new Funnel(path.dirname(require.resolve('loggly-jslogger/src/loggly.tracker.js')), {
      files: ['loggly.tracker.js'],
    });

    return new MergeTrees([vendorTree, logglyTree]);
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
        app.import(asset, options);
      };
    }
  }
};


