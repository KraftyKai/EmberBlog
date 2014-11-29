import Ember from 'ember';

export default Ember.View.extend({

    /*
    ** editModeChanged():
    **
    ** Keep related buttons the same size
    */

    editModeChanged: function() {

	//For a neat example of why the run loop is important
	//try changing Ember.run.next to Ember.run.once (IE run within same loop)
	//and observe how the buttons no longer resize
	Ember.run.next(this, function() {
	    if (this.$() && this.$('#cancelbtn')) {
		if (this.$('#cancelbtn').width() > this.$('#savebtn').width()) {
		    this.$('#savebtn').width( this.$('#cancelbtn').width() );
		} else {
		    this.$('#cancelbtn').width( this.$('#savebtn').width() );
		}
	    }
	});

    }.observes('controller.isEditing'),

    /*
    ** sisterPostsUpdated():
    **
    ** Keep related buttons (prev/next) the same size
    */

    sisterPostsUpdated: function() {
	Ember.run.next(this, function() {
	    if (this.$() && this.$('#prevPost') && this.$('#nextPost')) {
		if (this.$('#prevPost').width() > this.$('#nextPost').width()) {
		    this.$('#nextPost').width( this.$('#prevPost').width() );
		} else {
		    this.$('#prevPost').width( this.$('#nextPost').width() ) ;
		}
	    }
	});

    /* Not observing controller.prevPost because we only care **
    ** if both next and previous post change anyway           */
    }.observes('controller.nextPost')
});
