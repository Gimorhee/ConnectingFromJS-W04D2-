
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('milestones').del()
    .then(function () {
      // Inserts seed entries
      return knex('milestones').insert([
        {id: 1, name: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
