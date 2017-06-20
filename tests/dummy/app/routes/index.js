import Ember from 'ember';

import Loggly from 'ember-cli-loggly';

export default Ember.Route.extend({
	setupController() {
		console.log('Loggly', Loggly);
		this.controller.set('loggly', JSON.stringify(Loggly, null, 4));
	}
});
