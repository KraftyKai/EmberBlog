import Ember from 'ember';
import stringifyCSS from 'krafty-kai/utils/stringify-css';

export default Ember.Component.extend({
    
    style: function() {
	return stringifyCSS({
	    "height": "1px",
	    "background-color": "gray"
	});
    }.property()
});
