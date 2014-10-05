var user = require('../models/user.js');

module.exports.login = function (username, password, sequelize){
  //var q = "SELECT * FROM LibreoUsers WHERE username='" + username + "' AND password = '"+ password + "'";
  //connection.query(q).success(function(rows){
  user.User.find({where: {username: username}}).success(function(rows){ 
    console.log(rows);
  }); 
};

