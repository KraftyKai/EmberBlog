import Ember from 'ember';

export default Ember.Route.extend({

    renderTemplate: function() {
	this.render("post", {controller: 'new-post'});
    },

    setupController: function(controller, model) {
	this._super(controller, model);
	controller.set('isEditing', true);
    },

    controllerName: 'new-post',

    resetController: function (controller /*isExiting, transition*/) {
	controller.send('resetController');
    },

    actions: {
	willTransition: function(transition) {
	    var model = this.get('controller.model');
	    
	    if (this.get('controller.forceTransit')) {
		//Force transition (skip extraneous code execution)
		return true;
	    }

	    console.log(model);

	    //Check for changes
	    for(var item in model) {
		console.log("item");
		console.log(item);
		if (model[item] === '' || item === 'publishDate' || item === 'author') {
		    continue;
		}
		console.log("Detected change");
		// Detected changes, confirm for exit
		this.set('controller.transitionTarget', transition.targetName);
		this.set('controller.confirmingExit', true);
		transition.abort();
		return false; //Don't bubble further
	    }

	    //Continue bubbling
	    return true;
	}
    }
});
