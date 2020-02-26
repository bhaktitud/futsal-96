'use strict';
module.exports = (sequelize, DataTypes) => {
  // const CustomerField = sequelize.define('CustomerField', {
  //   CustomerId: DataTypes.INTEGER,
  //   FieldId: DataTypes.INTEGER
  // }, {});
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