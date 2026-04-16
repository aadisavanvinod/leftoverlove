exports.up = function(knex) {
  return knex.schema.createTable('ngos', (table) => {
    table.uuid('id')
      .primary()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');

    table.string('organization_name', 200).notNullable();
    table.text('description');

    table.string('registration_number', 100).unique();

    table.specificType('location', 'geography(POINT, 4326)').notNullable();

    table.jsonb('address')
      .notNullable()
      .defaultTo(knex.raw("'{}'::jsonb"));

    table.string('contact_person', 100);
    table.string('contact_email', 100).unique();
    table.string('contact_phone', 15).unique();

    // safer than enum
    table.string('operational_status').defaultTo('active');

    table.boolean('is_verified').defaultTo(false);

    table.jsonb('service_areas').defaultTo(knex.raw("'[]'::jsonb"));
    table.integer('max_pickup_radius_km').defaultTo(5);
    table.jsonb('pickup_schedule').defaultTo(knex.raw("'{}'::jsonb"));

    table.integer('total_donations_received').defaultTo(0);
    table.integer('people_served').defaultTo(0);

    table.timestamps(true, true);

    table.index('is_verified');
    table.index('operational_status');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ngos');
};