var sequelize = require('sequelize');
module.exports.login = function (username, password, connection){
  var q = "SELECT * FROM LibreoUsers WHERE username='" + username + "' AND password = '"+ password + "'";
  sequelize.query(q).success(function(rows){
    console.log(rows);
  });
};

