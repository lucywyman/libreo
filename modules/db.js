var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'oniddb.cws.oregonstate.ed';
    database: 'wymanl-db';
    user: 'wymanl-db';
    password: 'RNTujKZ36crFXyQV';
});

connection.connect(function(error){
    if(error){
        console.log("There was an error!");
    }
);

