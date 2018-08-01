var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    //here console.log was show url which (localhost:3000/arif) here it shows us /arif
    console.log('request was made:' + req.url);
    res.writeHead(200, {'content-type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');
    myReadStream.pipe(res);
});

server.listen(3000);
console.log('yo dwags, now listening to port 3000')