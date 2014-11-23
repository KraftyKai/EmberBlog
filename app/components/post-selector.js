import Ember from 'ember';
import stringifyCSS from 'krafty-kai/utils/stringify-css';

export default Ember.Component.extend({

    bulletPoint: function() {
	return stringifyCSS({
	    "font-size": "0.7em",
	    "margin": "5px"
	});
    }.property(),

    title: function() {
	return stringifyCSS({
	    "margin-top": "-5px"
	});
    }.property()
});
