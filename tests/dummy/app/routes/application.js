import Route from '@ember/routing/route';

import Loggly from 'ember-cli-loggly';

export default Route.extend({
	setupController() {
		this.controller.set('loggly', JSON.stringify(Loggly, null, 4));
	}
});
