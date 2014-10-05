var Sequelize = require('sequelize');
module.exports.Author = function(sequelize){
  var Author = sequelize.define('Author', {
    authorid: {type: Sequelize.integer,
      primaryKey: true,
      autoIncrement: true
    },  
      authorname: {type: Sequelize.string, 
        notNull: true, 
      unique: true
      }
  },{ 
    tableName: 'LibreoAuthors',
      timestamps: false,
  });
  Author.sync();
  return Author;
};
