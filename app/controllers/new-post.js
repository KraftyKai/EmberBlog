import Ember from 'ember';

export default Ember.ObjectController.extend({
    
    init: function() {
	var self = this;

	this._super();
	this.store.find('author', 'kraftykai').then( function(value) {
	    self.set('model.author', value);
	}, function(reason) {
	    console.log("Failed author load");
	    console.log(reason);
	});
    },
    
    needs: ['session'],

    model: function() {
	return {
	    title: '',
	    subheading: '',
	    content: '',
	    captionTitle: '',
	    publishDate: new Date()
	    
	};
    }.property(),

    isLoggedIn: Ember.computed.alias('controllers.session.isAuthenticated'),

    isEditing: true,

    missing: {

    },

    actions: {
	saveChanges: function() {
	    var self = this;

	    //Validate form
	    this.set('missing.title', false);
	    this.set('missing.content', false);
	    if (!this.get('model.title')) {
		this.set('missing.title', true);
		return;
	    }
	    if (!this.get('model.content')) {
		this.set('missing.content', true);
		return;
	    }

	    var record = this.store.createRecord('post', this.get('model'));
	    record.save().then(function(post) {
		console.log("Save Success");
		self.set('forceTransit', true);
		self.transitionToRoute('post', post);
		self.send('resetController');
	    }, function(reason) {
		console.log("Failed to save:");
		console.log(reason);
	    });
	},

	cancelChanges: function() {
	    this.send('resetController');
	    this.transitionToRoute('/posts');
	   
	},

	forceTransition: function() {
	    this.set('forceTransit', true);
	    this.transitionToRoute(this.get('transitionTarget'));
	},

	resetController: function() {
	    console.log("pudding pop");
	    this.set('forceTransit', false);
	    this.set('transitionTarget', '');
	    this.set('missing', {});
	    this.set('confirmingExit', false);
	    
	    this.set('isEditing', false);
	    this.set('model.title', '');
	    this.set('model.subheading', '');
	    this.set('model.captionTitle', '');
	    this.set('model.content', '');
	    this.set('model.publishDate', new Date());
	}
	
    }
});
