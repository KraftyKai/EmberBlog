import Ember from 'ember';
import stringifyCSS from 'krafty-kai/utils/stringify-css';

export default Ember.ObjectController.extend({

   joinedDate: function() {
	return stringifyCSS({
	    "font-size": "0.4em"
	});
    }.property(),

    authorTitle: function() {
	return stringifyCSS({
	    "margin-top": "0",
	    "font-size": "1.5em"
	});
    }.property(),

    authorName: function() {
	return stringifyCSS({
	    "margin-bottom": "5px"
	});
    }.property()
});
