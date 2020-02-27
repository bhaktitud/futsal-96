'use strict';
module.exports = (sequelize, DataTypes) => {
  class Customer extends sequelize.Sequelize.Model{}
  Customer.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  },{
    sequelize
  })
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};