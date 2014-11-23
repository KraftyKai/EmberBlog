import Ember from 'ember';

export default Ember.Route.extend({
    setupController: function (controller, model) {
	this._super(controller, model);
	if (model.get('partial')) {
	    if (model.get('isDirty')) {
		model.rollback();
		console.log("Discarded unexpected changes.");
	    }
	    model.reload();
	    controller.set('model', model);
	}
    }
});
