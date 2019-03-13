[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-loggly.svg)](http://emberobserver.com/addons/ember-cli-loggly)
[![Build Status](https://travis-ci.org/devotox/ember-cli-loggly.svg)](http://travis-ci.org/devotox/ember-cli-loggly)
[![Coverage Status](https://codecov.io/gh/devotox/ember-cli-loggly/branch/master/graph/badge.svg)](https://codecov.io/gh/devotox/ember-cli-loggly)
[![NPM Version](https://badge.fury.io/js/ember-cli-loggly.svg)](http://badge.fury.io/js/ember-cli-loggly)
[![NPM Downloads](https://img.shields.io/npm/dm/ember-cli-loggly.svg)](https://www.npmjs.org/package/ember-cli-loggly)
[![Dependency Status](https://david-dm.org/poetic/ember-cli-loggly.svg)](https://david-dm.org/poetic/ember-cli-loggly)
[![DevDependency Status](https://david-dm.org/poetic/ember-cli-loggly/dev-status.svg)](https://david-dm.org/poetic/ember-cli-loggly#info=devDependencies)
[![Greenkeeper](https://badges.greenkeeper.io/devotox/ember-cli-loggly.svg)](https://greenkeeper.io/)

ember-cli-loggly
==============================================================================

Simple wrapper around loggly to allow usage in ember applications

[DEMO](http://devotox.github.io/ember-cli-loggly)

Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-loggly
```

Usage
------------------------------------------------------------------------------

`import loggly from 'ember-cli-loggly'`

- Also comes with a service for easy initialization of loggly
- Service has a simple push function proxy to `Loggly.push`

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
