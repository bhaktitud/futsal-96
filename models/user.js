'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}
  User.init ({
    username: {
      type : DataTypes.STRING,
      unique : true
    },
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        not: {
          args: ['[a-z]', 'i'],
          msg: 'Only number allowed'
        }
      }
    }
  }, {
    validate : {
      usernameIsNull(){
        if(!this.username.length) {
          return Promise.reject(new Error("Username cannot be empty"));
        }
      },
      passwordIsNull(){
        if(!this.password.length) {
          return Promise.reject(new Error("Password cannot be empty"));
        }
      },
      nameIsNull(){
        if(!this.name.length) {
          return Promise.reject(new Error("Name cannot be empty"));
        }
      },
      emailIsNull(){
        if(!this.email.length) {
          return Promise.reject(new Error("Email cannot be empty"));
        }
      },
      phone_numberIsNull(){
        if(!this.phone_number.length) {
          return Promise.reject(new Error("Phone number cannot be empty"));
        }
      },
    },
    sequelize ,
    modelName : 'User'
  });

  User.associate = function(models) {
    User.hasMany (models.UserField);
  };
  return User;
};