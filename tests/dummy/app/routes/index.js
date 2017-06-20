import Ember from 'ember';

import Loggly from 'ember-cli-loggly';

export default Ember.Route.extend({
	setupController() {
		this.controller.set('loggly', JSON.stringify(Loggly, null, 4));
	}
});
