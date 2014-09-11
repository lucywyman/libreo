//First things first, let's import some nifty tools
var express = require('express');
var http = require('http');
var url = require('url');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');

//Including external files
var searchModule = require('./modules/search.js');
var loginModule = require('./modules/login.js');
var registerModule = require('./modules/register.js');
var db = require('./modules/db.js');

var connection = db.connection.getConnection(function(err){
  console.log(err);
});

//connection.connect(function(err){
  //console.log(err);
//});

var app = express();
var server = http.createServer(app);


//Cookie parser to, well, handle cookies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.cookieParser());
app.use(express.cookieSession({secret: 'bombay'}));

//Defining static directory
app.use(express.static(__dirname + '/static'));


//Setting some express app variables
app.set('view engine', 'jade');
app.set('views', './views');

app.use(app.router);

//Now, let's start serving some pages!
app.get('/', function(request, response){
    response.render('index.jade', {'page' : {'name' : 'Home'}});
    });

app.get('/about', function(request, response){
    response.render('about.jade', {'page' : {'name' : 'About'}});
    });

app.get('/login', function(request, response){
    response.render('login.jade', {'page' : {'name' : 'Login'}});
    });

app.post('/loginAction', function(request, response){
    var login = loginModule.login(request.body.username, request.body.password, connection);
    if(login){
    app.use(expression.session({'userid': login}));
    response.render('index.jade', {'page' : {'name': 'Home'}, 'message' : 'Login successful!'});
    }
    else{
    response.render('error.jade', {'page' : {'name': 'Login'}, 'message': 'Oops!  Either your username or password was incorrect. Please try again.'})
      }
      });

app.get('/register', function(request, response){
    response.render('register.jade', {'page' : {'name' : 'Register'}});
    });

app.post('/registerAction', function(request, response){
    //Call register function
    });

app.post('/searchResults', function(request, response){
    var res = searchModule.search(request);
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write(JSON.stringify(res));
    response.end();
    //response.render('results.jade', {'results': results, 'page': {'name': 'Search'}});
    });


server.listen(8888);
