import Ember from 'ember';

export default Ember.ArrayController.extend({
    init: function() {
	this._super();
	var self = this;
	this.store.find('post').then( function(posts) {
	    self.set('model', posts);
	});
    },
    
    sortProperties: ['publishDate'],
    sortAscending: false
});
