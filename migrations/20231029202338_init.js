/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('questions', function (table) {
    table.increments('id');
    table.integer('mod_num');
    table.string('topic', 255);
    table.string('question', 2000);
    table.string('answer', 5000);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('questions');
};
