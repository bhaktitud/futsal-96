'use strict';
module.exports = (sequelize, DataTypes) => {
  class CustomerField extends sequelize.Sequelize.Model{}
  CustomerField.init({
    CustomerId: DataTypes.INTEGER,
    FieldId: DataTypes.INTEGER
  })
  CustomerField.associate = function(models) {
    // associations can be defined here
  };
  return CustomerField;
};