'use strict';
module.exports = (sequelize, DataTypes) => {
  // const Field = sequelize.define('Field', {
  //   name: DataTypes.STRING,
  //   type: DataTypes.STRING,
  //   price: DataTypes.STRING,
  //   facility: DataTypes.STRING
  // }, {});
  class Field extends sequelize.Sequelize.Model{}
  Field.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    price: DataTypes.STRING,
    facility: DataTypes.STRING
  },{
    sequelize
  })
  Field.associate = function(models) {
    // associations can be defined here
  };
  return Field;
};