var db = require('./db.js');

function login(username, password){
  var query = 'SELECT * FROM LibreoUsers WHERE username=' + username + ' AND password = '+ password +'';
  db.query(query, function(error, rows){
      if(error){
      //error handling
      return NULL;
      }
      else{
      return data.userid;
      }      
      });
}

module.exports.login = login;
