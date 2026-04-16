exports.up = function(knex) {
  return knex.schema.createTable('donations', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));

    table.uuid('listing_id')
      .references('id')
      .inTable('listings')
      .onDelete('CASCADE')
      .notNullable();

    table.uuid('ngo_id')
      .references('id')
      .inTable('ngos')
      .onDelete('CASCADE')
      .notNullable();

    table.integer('quantity_claimed').notNullable();

    table.string('claim_code', 10).unique().notNullable();

    // safer than enum
    table.string('status').defaultTo('claimed');

    table.timestamp('accepted_at');
    table.timestamp('picked_up_at');
    table.timestamp('cancelled_at');

    table.text('notes');

    table.timestamps(true, true);

    table.index('listing_id');
    table.index('ngo_id');
    table.index('status');
    table.index('claim_code');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('donations');
};