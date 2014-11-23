import Ember from 'ember';
import stringifyCss from 'krafty-kai/utils/stringify-css';

export default Ember.ObjectController.extend({

    technicalSelectorImg: '/assets/images/technical-tux.png',

    businessSelectorImg: 'assets/images/business-tux.png',

    politicsSelectorImg: 'assets/images/politics-tux.png',

    everythingSelectorImg: 'assets/images/everything-tux.png',

    innerCircleTopOffset: {
	    'margin-top' : '25%',
	    'width': '100%'
    },

    innerCircleBottomOffset: {
	    'margin-top' : '25%',
	    'padding-bottom' : '25%',
	    'width': '100%'
    },

    innerCircleLeftOffset: {
	    'margin-left': '0%',
	    'width': '100%'
    },

    innerCircleRightOffset: {
	    'margin-left': '0%',
	    'width': '100%'
    },

    imgStyle: function() {
	return stringifyCss({
	    'width': '100%',
	    'height': '100%',
	    'border-radius': '50%'
	});
    }.property(),

    selectionBox: function() {
	return stringifyCss({
	    'background-color': '#f5f5f5',
	    'color': 'black',
	    'border-radius': '5%'
	});
    }.property(),

    selectionCircle: function() {
	return {
	    'background-color': 'black',
	    'color': 'white',
	    'background-image': "url('assets/images/business-tux-bg.jpg')"
	};
    }.property(),

    selectFlavorTopLeft: function() {
	return stringifyCss(
	    this.get('innerCircleTopOffset'), 
	    this.get('innerCircleLeftOffset')
	);
    }.property('innerCircleTopOffset', 'innerCircleLeftOffset'),

    selectFlavorTopRight: function() {
	return stringifyCss(
	    this.get('innerCircleTopOffset'),
	    this.get('innerCircleRightOffset')
	);
    }.property('innerCircleTopOffset', 'innerCircleRightOffset'),

    selectFlavorBottomRight: function() {
	return stringifyCss(
	    this.get('innerCircleBottomOffset'),
	    this.get('innerCircleRightOffset')
	);
    }.property('innerCircleBottomOffset', 'innerCircleRightOffset'),

    selectFlavorBottomLeft: function() {
	return stringifyCss(
	    this.get('innerCircleBottomOffset'),
	    this.get('innerCircleLeftOffset')
	);
    }.property('innerCircleBottomOffset', 'innerCircleLeftOffset')
});
