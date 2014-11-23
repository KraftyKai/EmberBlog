import DS from 'ember-data';
/* global $ */

export default DS.RESTSerializer.extend({
    normalizePayload: function(payload) {
	if (payload.hasOwnProperty('posts')) {
	    $.each(payload.posts, function(key, value) {
		payload.authors = [{id: value.author}];
	    });
	} else if (payload.hasOwnProperty('post')) {
	    payload.authors = [{
		id: payload.post.author,
		partial: true
	    }];
	}
	return payload;
    }
});
