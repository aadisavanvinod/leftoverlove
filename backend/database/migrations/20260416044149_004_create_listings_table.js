exports.up = function(knex) {
  return knex.schema.createTable('listings', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));

    table.uuid('vendor_id')
      .references('id')
      .inTable('vendors')
      .onDelete('CASCADE')
      .notNullable();

    table.string('title', 200).notNullable();
    table.text('description');

    table.jsonb('images').defaultTo(knex.raw("'[]'::jsonb"));

    table.string('category', 50).notNullable();

    table.decimal('original_price', 10, 2).notNullable();
    table.decimal('discounted_price', 10, 2).notNullable();

    table.integer('quantity_available').notNullable();
    table.integer('quantity_reserved').defaultTo(0);

    table.string('portion_size', 50);

    table.timestamp('pickup_start').notNullable();
    table.timestamp('pickup_end').notNullable();

    table.specificType('location', 'geography(POINT, 4326)').notNullable();
    table.string('pickup_address', 500).notNullable();

    table.jsonb('dietary_info').defaultTo(knex.raw("'{}'::jsonb"));
    table.jsonb('allergens').defaultTo(knex.raw("'[]'::jsonb"));

    table.boolean('is_donation').defaultTo(false);

    // safer than enum
    table.string('status').defaultTo('active');

    table.integer('view_count').defaultTo(0);

    table.timestamps(true, true);

    // Indexes
    table.index('vendor_id');
    table.index('status');
    table.index('is_donation');
    table.index('pickup_end');
    table.index('category');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('listings');
};