exports.up = function(knex) {
  return knex.schema.createTable('ratings', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));

    table.uuid('reservation_id')
      .references('id')
      .inTable('reservations')
      .onDelete('CASCADE')
      .unique()
      .notNullable();

    table.uuid('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .notNullable();

    table.uuid('vendor_id')
      .references('id')
      .inTable('vendors')
      .onDelete('CASCADE')
      .notNullable();

    // keep simple, enforce 1–5 in backend
    table.integer('rating').notNullable();

    table.text('review');

    table.jsonb('tags').defaultTo(knex.raw("'[]'::jsonb"));

    table.boolean('is_anonymous').defaultTo(false);

    table.timestamps(true, true);

    table.index('vendor_id');
    table.index('user_id');
    table.index('rating');
    table.index('reservation_id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ratings');
};