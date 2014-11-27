import Ember from 'ember';

export default Ember.Route.extend({
/*    setupController: function (controller, model) {
	this._super(controller,model); */

    afterModel: function(model, transition) {
	this._super(model, transition);
	if (model.get('partial')) {
	    if (model.get('isDirty')) {
		model.rollback();
		console.log("Discarded unexpected changes.");
	    }
	    model.reload();
	}
    },

    resetController: function (controller  /*isExiting, transition*/) {
	controller.send('resetController');
    },

    actions: {
	willTransition: function(transition) {
	    if (this.get('controller.isEditing') && 
		this.get('controller.model.isDirty') &&
		!this.get('controller.forceTransit')) {

		this.set('controller.transitionTarget', transition.targetName);
		this.set('controller.confirmingExit', true);
		transition.abort();
		return;
	    }
	    this.send('resetController');
	}
    }
});
