import Ember from 'ember';

export default Ember.ObjectController.extend({

    needs: ['session', 'posts'],

    isLoggedIn: Ember.computed.alias('controllers.session.isAuthenticated'),

    isEditing: false,
    missing: {},
    confirmingExit: false,

    nextPost: false,
    prevPost: false,

    actions: {
	editPost: function() {
	    this.set('isEditing', true);
	},

	cancelChanges: function() {
	    this.get('model').rollback();
	    this.send('resetController');
	},

	saveChanges: function() {
	    if (!this.get('model.title')) {
		this.set('missing.title', true);
		return;
	    }
	    if (!this.get('model.content')) {
		this.set('missing.content', true);
		return;
	    }

	    this.get('model').save().then(function(post) {
		console.log("Save Successful");
	    }, function(reason) {
		console.log("Failed");
		console.log(reason);
		alert("Account update failed");
	    });
	    this.send('resetController');
	},

	forceTransition: function() {
	    this.set('forceTransit', true);
	    this.get('model').rollback();
	    this.transitionToRoute(this.get('transitionTarget'));
	},

	resetController: function() {
	    this.set('isEditing', false);
	    this.set('forceTransit', false);
	    this.set('confirmingExit', false);
	    this.set('transitionTarget', '');
	    this.set('missing', {});
	    this.set('prevPost', false);
	    this.set('nextPost', false);
	    this.send('getSisterPosts');
	},

	getSisterPosts: function() {
	    var self = this;
	    var nextIndex = null;
	    this.store.find('post').then( function(posts) {

		posts.content = posts.content.sortBy('publishDate');
		var thisIndex = posts.content.indexOf( self.get('model') );
		
		if (posts.content[thisIndex+1]) {
		    self.set('nextPost', posts.content[thisIndex+1].id);
		}
		if (posts.content[thisIndex-1]) {
		    self.set('prevPost', posts.content[thisIndex-1].id);
		}

	    });
	},

	goNextPost: function() {
	    this.transitionToRoute('post', this.get('nextPost'));
	},

	goPrevPost: function() {
	    this.transitionToRoute('post', this.get('prevPost'));
	}
	    
    }
});
