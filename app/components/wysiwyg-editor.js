import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement: function() {
	this.$('#editor').summernote({
	    height: 300,
	    codemirror: {
		theme: 'monokai'
	    }
	});
	this.$('#editor').code(this.get('content'));
    },

    willDestroyElement: function() {
	this.$('#editor').destroy();
    },

    input: function() {
	this.send('updateContent');
    },

    actions: {
	updateContent: function() {
	    var content = this.$('#editor').code();
	    this.set('content', content);
	}
    }
});
