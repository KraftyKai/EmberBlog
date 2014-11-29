import Ember from 'ember';
/* global $, jQuery */

export default Ember.Component.extend({

    
    didInsertElement: function() {
	this.handleResize();
	$(window).on('resize', Ember.run.bind(this, this.handleResize));
    },

    willDestroyElement: function() {
	$(window).off('resize');
    },

    handleResize: function() {
	this.$('.circle').height(this.$().width());
	this.$('.circle').width(this.$().width());
    },

    styles: {
	'border-radius': '50%'
    },
   
    fillStyle: function() {

	var result = '';
	this.set('styles', jQuery.extend(this.get('styles'), this.get('css')));
	jQuery.each(this.get('styles'), function( index, value) {
	    result += index + ': ' + value + '; ';
	});

	console.log("result is:");
	console.log(result);

	return result;
    }.property('styles')
	
    
});
