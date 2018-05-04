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

### Installation

* `git clone <repository-url>`
* `cd ember-cli-loggly`
* `yarn install`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
