var http=require('http');
var url=require('url');

//Place the start server in another function so it can be exported
function startServer(route){
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + "received");

        route(pathname);

        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello world!');
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started");
}

exports.startServer = startServer;


