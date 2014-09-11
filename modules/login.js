function login(username, password, connection){
  var q = "SELECT * FROM LibreoUsers WHERE username='" + username + "' AND password = '"+ password + "'";
  connection.query(q, function(err, rows){
    if(err){
      //error handling
      console.log("Fuck " + err);
      //return NULL;
    }
    else{
      console.log(rows[0].username);
      return rows[0].userid;
    }      
  });
}

module.exports.login = login;
