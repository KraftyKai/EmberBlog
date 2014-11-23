import Ember from 'ember';

export default Ember.View.extend({

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

    }.observes('controller.isEditing')
});
