var Sequelize = require('sequelize');
module.exports.Book = function(sequelize){
  var Book = sequelize.define('Book', {
    bookid: {type: Sequelize.integer,
      primaryKey: true,
      autoIncrement: true
    },
      title: {type: Sequelize.string,
        notNull: true
      },  
      isbn: {type: Sequelize.integer,
        notNull: true,
      unique: true
      }
  },{
    tableName: 'LibreoBooks',
      timestamps: false,
      engine: 'InnoDB'
  });
});
Book.sync;
return Book;
};

