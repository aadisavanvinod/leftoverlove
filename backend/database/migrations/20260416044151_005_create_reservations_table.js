exports.up = function(knex) {
  return knex.schema.createTable('reservations', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));

    table.uuid('listing_id')
      .references('id')
      .inTable('listings')
      .onDelete('CASCADE')
      .notNullable();

    table.uuid('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .notNullable();

    table.integer('quantity').notNullable().defaultTo(1);
    table.decimal('total_amount', 10, 2).notNullable();

    table.string('pickup_code', 10).unique().notNullable();
    table.string('qr_code_url');

    table.string('razorpay_order_id');
    table.string('razorpay_payment_id');
    table.string('razorpay_signature');

    // safer than enum
    table.string('payment_status').defaultTo('pending');
    table.string('pickup_status').defaultTo('pending');

    table.timestamp('payment_completed_at');
    table.timestamp('picked_up_at');
    table.timestamp('cancelled_at');
    table.string('cancellation_reason');

    table.timestamps(true, true);

    table.index('listing_id');
    table.index('user_id');
    table.index('payment_status');
    table.index('pickup_status');
    table.index('pickup_code');

    table.index('razorpay_order_id');
    table.index('razorpay_payment_id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('reservations');
};