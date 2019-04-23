
exports.up = function(knex, Promise) {
  return knex.schema.createTable('milestones', function(table){
    table.string('description');
    table.timestamps('date_archieved');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('milestones')
};
