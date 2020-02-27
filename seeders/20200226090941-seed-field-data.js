'use strict';
const fs = require ('fs') ;

let fields = JSON.parse(fs.readFileSync('./databases/fieldData.json', 'utf-8')) ;

for ( let i = 0 ; i < fields.length ; i++) {
  fields[i].createdAt = new Date ();
  fields[i].updatedAt = new Date ();
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Fields', fields , {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Fields', null, {});
  }
};