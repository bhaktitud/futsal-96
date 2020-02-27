'use strict';
module.exports = (sequelize, DataTypes) => {
  class Field extends sequelize.Sequelize.Model{}
  Field.init ({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    facility: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize ,
    modelName : 'Field'
  });

  Field.associate = function(models) {
    Field.hasMany (models.UserField);
  };
  return Field;
};