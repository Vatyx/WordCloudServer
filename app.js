var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var filler = "what";

app.post("/", function(req, res) {
	console.log("Oh boy in post");
	console.log(req.body.hello);
	filler = req.body.hello;
	res.json({img: "http://dummyimage.com/830x600/000/fff"});
});

app.get("/", function(req, res) {
	res.send("<p>" + filler + "</p>");
});

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
	console.log("Listening on port 3000");
})
