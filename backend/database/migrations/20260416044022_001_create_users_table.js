exports.up = async function(knex) {
  // Enable extensions
  await knex.raw('CREATE EXTENSION IF NOT EXISTS postgis');
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  return knex.schema.createTable('users', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));

    table.string('phone', 15).unique().notNullable();
    table.string('email', 100).unique();
    table.string('name', 100);

    // safer than enum
    table.string('role').defaultTo('customer');

    table.string('profile_image');
    table.specificType('location', 'geography(POINT, 4326)');

    table.jsonb('address').defaultTo(knex.raw("'{}'::jsonb"));

    table.string('fcm_token');
    table.string('device_id');

    // safer than enum
    table.string('account_status').defaultTo('active');

    table.timestamp('last_active_at');
    table.timestamps(true, true);

    table.index('phone');
    table.index('role');
    table.index('account_status');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};