var Sequelize = require('sequelize');
module.exports.User =  function(sequelize) {
  var User = sequelize.define('User', {
    userid: {type: Sequelize.integer,
      primaryKey: true,
      autoIncrement: true
    },
    firstname: {type: Sequelize.string,
      notNull: true
    },
      lastname: {type: Sequelize.string,
        notNull: true
      },
      address: {type: Sequelize.string,
        notNull: true
      },
      zip: {type: Sequelize.integer,
        notNull: true
      },
      email: {type: Sequelize.string,
        notNull: true,
        unique: true
      },
      username: {type: Sequelize.string,
        notNull: true,
        unique: true
      },
      password: {type:Sequelize.string,
        notNull: true,
      },
  },{
    tableName: 'LibreoUsers',
      timestamps: false,
  });

  User.sync();
  return User;
};

