import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

    ajaxSuccess: function (jqXHR, jsonPayload) {
	/*
	** Lazy-loading optimization
	**
	** Keep partial responses from overriding data
	** previously cached from a full response
	**
	** Note: Store was injected into adapter via 
	**       initializers/adapter-store.js
	*/
	if (jsonPayload.posts) {
	    var posts = jsonPayload.posts;

	    for (var i=0; i < posts.length; null) {
		var record;
		if (posts[i].partial &&
		    (record = this.store.getById('post', posts[i].id)) &&
		    !record.partial ) {
		    // Post received from server is partial (lazy loaded)
		    // and complete record is already loaded
		    posts.splice(i, 1); //Remove post from array
		    continue;
		}
		// Increment i only if we didn't splice
		i++;
		
	    }
	} else if (jsonPayload.post) {
	    if (jsonPayload.post.partial) {
		console.log("A partial was loaded from a byID request.");
	    }
	}
	return jsonPayload;
    }
});
