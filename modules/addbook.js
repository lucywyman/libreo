function addbook(title, author, option, userid) {
    //Condense these?  It's probably unnecessary to have define the query then the result

    var authorquery = 'INSERT INTO LibreoAuthors (authorid, authorname) VALUES (NULL, author)';
    var aresult = connection.query(authorquery);
    
    var bookquery = 'INSERT INTO LibreoBooks (bookid, title, author) VALUES (NULL, title, (SELECT authorid FROM LibreoAuthors WHERE authorname=author))';
    var bresult = connection.query(bookquery);

    var userquery = 'INSERT INTO LibreoBooksToUsers VALUES (userid, (SELECT bookid FROM LibreoBooks WHERE title=title), option, price)';
    var uresult = connection.query(userquery);

    var cityquery = 'INSERT INTO LibreoBooksToCities (cityid, bookid, VALUES ((SELECT city FROM LibreoUsers WHERE userid=userid), (SELECT bookid FROM LibreoBooks WHERE title=title))';
    var cresult = connection.query(cityquery);

    //TODO Error handling!    
