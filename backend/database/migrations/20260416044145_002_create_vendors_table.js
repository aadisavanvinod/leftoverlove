exports.up = function(knex) {
  return knex.schema.createTable('vendors', (table) => {
    table.uuid('id')
      .primary()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');

    table.string('business_name', 200).notNullable();
    table.text('description');

    table.string('business_type', 50);

    table.specificType('location', 'geography(POINT, 4326)').notNullable();

    table.jsonb('address')
      .notNullable()
      .defaultTo(knex.raw("'{}'::jsonb"));

    table.string('fssai_license', 50);
    table.string('gst_number', 50);

    table.jsonb('operating_hours').defaultTo(knex.raw("'{}'::jsonb"));
    table.jsonb('cuisine_types').defaultTo(knex.raw("'[]'::jsonb"));

    table.boolean('is_verified').defaultTo(false);
    table.boolean('is_featured').defaultTo(false);

    table.decimal('rating', 3, 2).defaultTo(0);
    table.integer('total_ratings').defaultTo(0);
    table.integer('total_sales').defaultTo(0);

    table.decimal('total_revenue_recovered', 10, 2).defaultTo(0);
    table.integer('meals_saved').defaultTo(0);

    table.jsonb('payment_details').defaultTo(knex.raw("'{}'::jsonb"));

    table.timestamps(true, true);

    table.index('business_type');
    table.index('is_verified');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('vendors');
};