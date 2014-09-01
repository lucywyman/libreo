var express = require('express');
var http = require('http');
var url = require('url');

var app = express();
var server = http.createServer(app);

app.use(app.router);
app.use(express.cookieParser());
app.use(express.static(__dirname + '/static'));

app.set('view engine', 'jade');
app.set('views', './views');

//Should every page be laid out here, or should I have other files that feed into this one?

app.get('/', function(request, response){
    response.render('index.jade', {'page' : {'name' : 'Home'}});
});

app.get('/about', function(request, response){
    response.render('about.jade', {'page' : {'name' : 'About'}});
});

app.get('/login', function(request, response){
    response.render('login.jade', {'page' : {'name' : 'Login'}});
});

app.get('/register', function(request, response){
    response.render('register.jade', {'page' : {'name' : 'Register'}});
});

app.post('/registerAction', function(request, response){
    //Call register function
});

app.post('/searchResults', function(request, response){
    var results = req.body;
    var query = ['SELECT lu.username, lc.city, lb.title, la.authorname, lbtu.option',
        'FROM LibreoBooks AS lb ',
        'INNER JOIN LibreoAuthors AS la ON lb.author=la.authorid ',
        'INNER JOIN LibreoBookstoUsers AS lbtu ON lbtu.bookid=lb.bookid ',
        'INNER JOIN LibreoUsers AS lu ON lu.userid=lbtu.userid ',
        'INNER JOIN LibreoCities AS lc ON lc.cityid = lu.city ',
        'WHERE lb.title LIKE results.item OR la.authorname LIKE results.item'].join('\n');
    connection.query(query, function(results){
        response.render('/searchresults', {'results': results, 'page': {'name': 'Search'}});
    });
});


server.listen(8888);
