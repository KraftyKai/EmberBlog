import Ember from 'ember';

export default Ember.ArrayController.extend({
    init: function() {
	this._super();
	var self = this;
	this.store.find('post').then( function(/*posts*/) {
	    self.set('model', self.store.filter('post'));
	});
    },
    
    sortProperties: ['publishDate'],
    sortAscending: false
});
