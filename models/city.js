var Sequelize = require('sequelize');
module.exports.City = function(sequelize){
  var City = sequelize.define('City', {
    cityid: {type: Sequelize.integer,
      primaryKey: true,
      autoIncrement: true
    },
      city: {type: Sequelize.string,
        notNull: true
      },
      state: {type: Sequelize.string,
        notNull: true
      }
  },{
    tableName: 'LibreoCities',
      timestamps: false,
  });
  City.sync();
  return City;
};

