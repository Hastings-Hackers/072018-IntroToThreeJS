var express = require("express"),
	path = require("path");

var app = express();

app.use("/images", express.static(__dirname + "/images"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/styles", express.static(__dirname + "/styles"));

var http = require("http").createServer(app).listen(8080);

app.get("/:page", function(req, res) {
	res.sendFile(path.join(__dirname, "/views/" + req.params.page + ".html")); 
});