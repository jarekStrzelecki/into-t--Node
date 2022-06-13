var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function(req, res){
	var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
	if(filename == './'){	filename = './index'; }
	filename = filename + ".html";
	console.log("filename: ", filename);
	
	fs.readFile(filename, function (err, data){
		if(err){
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("<center><h1>404 Not found </h1></center>");
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		console.log("...Incoming request: " + req.url);
		res.end();
	})

}).listen(8080);

console.log("Node Server Listening on Port 8080....")
