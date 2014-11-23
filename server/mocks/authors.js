module.exports = function(app) {
    
    var authors = [{
	id: 'KraftyKai',
	firstName: 'Kai',
	lastName: 'Kraft',
	title: 'Tinkerer',
	about: "Something about how fun it is to tinker because I can't think of anything better to write.",
	createDate: "06/06/2014"
    }];

    var express = require('express');
    var authorsRouter = express.Router();
    authorsRouter.get('/', function(req, res) {
	res.send({"authors":authors});
    });
    authorsRouter.get('/:id', function(req, res) {
	for (var i=0; i<authors.length; i++) {
	    if (authors[i].id.toUpperCase() == req.params.id.toUpperCase()) {
		res.send({"author": authors[i]});
	    }
	}
    });
    app.use('/api/v1/authors', authorsRouter);
};
