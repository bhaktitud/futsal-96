'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('UserFields', ['FieldId'], {
      type: 'foreign key',
      name: 'custom_fkey_FieldId',
      references: { //Required field
        table: 'Fields',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint ('UserFields', 'custom_fkey_FieldId')
  }

};