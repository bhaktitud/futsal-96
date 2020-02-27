'use strict';
module.exports = (sequelize, DataTypes) => {
  class UserField extends sequelize.Sequelize.Model{}
  UserField.init ({
    dateBooked: DataTypes.DATE,
    session: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    FieldId: DataTypes.INTEGER
  }, {
    sequelize ,
    modelName : 'UserField'
  });

  UserField.associate = function(models) {
    UserField.belongsTo(models.User);
    UserField.belongsTo(models.Field);   
  };
  return UserField;
};