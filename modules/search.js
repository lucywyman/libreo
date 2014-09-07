var db = require('./db.js');

function search(request){
  var data = request.body;
  /*var query = ['SELECT lu.username, lc.city, lb.title, la.authorname, lbtu.option',
      'FROM LibreoBooks AS lb ',
      'INNER JOIN LibreoAuthors AS la ON lb.author=la.authorid ',
      'INNER JOIN LibreoBookstoUsers AS lbtu ON lbtu.bookid=lb.bookid ',
      'INNER JOIN LibreoUsers AS lu ON lu.userid=lbtu.userid ',
      'INNER JOIN LibreoCities AS lc ON lc.cityid = lu.city ',
      'WHERE lb.title LIKE "1984" OR la.authorname LIKE "George Orwell"'].join('\n');*/
  var query = 'SELECT * FROM LibreoUsers';
  var results = [];
  //db.connect();
  db.query(query, function(error, rows){
    return rows;
      });
}

module.exports.search = search;
