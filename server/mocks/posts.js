module.exports = function(app) {
    var posts = [
	{
	    id: 1,
	    captionTitle: "You cruel cruel world!",
	    title: "Hello World!",
	    subheading: "Says Martian to the Plutonian",
	    content: "Because saying anything but, is getting off on the wrong foot.",
	    publishDate: "11/05/2014",
	    createDate: "10/29/2014",
	    author: "KraftyKai"
	},
	{
	    id: 2,
	    captionTitle: null,
	    title: "Foo",
	    subheading: "barbara",
	    content: "Going to the bar is fun",
	    publishDate: "11/01/2004",
	    createDate: "10/20/2014",
	    author: "KraftyKai"
	},
	{
	    id: 3,
	    captionTitle: null,
	    title: "Woozer",
	    subheading: "Wowzer",
	    content: "Going to the bar is fun",
	    publishDate: "11/01/2014",
	    createDate: "10/30/2014",
	    author: "KraftyKai"
	}
    ];
    var express = require('express');
    var postsRouter = express.Router();
    postsRouter.get('/', function(req, res) {
	var tempPosts = []
	for (var i=0; i<posts.length; i++) {
	    tempPosts[i] = {
		id: posts[i].id,
		captionTitle: posts[i].captionTitle,
		title: posts[i].title,
		subheading: posts[i].subheading,
		publishDate: posts[i].publishDate,
		author: posts[i].author,
		partial: true
	    }
	};
	res.send({"posts":tempPosts});
    });
    postsRouter.get('/:id', function(req, res) {
	var post = posts[req.params.id-1];
	res.send({"post": {
	    id: post.id,
	    captionTitle: post.captionTitle,
	    title: post.title,
	    content: post.content,
	    subheading: post.subheading,
	    publishDate: post.publishDate,
	    author: post.author
	}
		  });
    });

    postsRouter.put('/:id', function(req, res) {
	var post = req.body.post;
	posts[req.params.id-1]['captionTitle'] = post.captionTitle;
	posts[req.params.id-1]['title'] = post.title;
	posts[req.params.id-1]['content'] = post.content;
	posts[req.params.id-1]['subheading'] = post.subheading;
	posts[req.params.id-1]['publishDate'] = post.publishDate;
	//We don't want to update the author...

	//Respond with new record
	res.send({'post': posts[req.params.id-1]});
    });

    postsRouter.post('/', function(req, res) {
	var post = req.body.post;
	post['id'] = posts[posts.length-1].id + 1;
	post['createDate'] = new Date();
	posts[posts.length] = post;
	res.send({post: post});
    });

    app.use('/api/v1/posts', postsRouter);
};
