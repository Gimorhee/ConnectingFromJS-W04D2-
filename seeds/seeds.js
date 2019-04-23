
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('milestones').del()
    .then(function () {
      // Inserts seed entries
      return knex('milestones').insert([
        {description: 'Won lottery'},
        {date_achieved: '2 weeks ago.'}
      ]);
    });
};
