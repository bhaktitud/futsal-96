'use strict';
module.exports = (sequelize, DataTypes) => {
  // const Customer = sequelize.define('Customer', {
  //   name: DataTypes.STRING,
  //   email: DataTypes.STRING,
  //   phone_number: DataTypes.STRING,
  //   username: DataTypes.STRING,
  //   password: DataTypes.STRING
  // }, {});
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