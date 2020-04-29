
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table) => {
      table.increments("id")
      table.text("VIN").notNull().unique()
      table.text("make").notNull()
      table.text("model").notNull()
      table.text("mileage").notNull()
      table.text("transmission")
      table.text("statusOfTitle")
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExist("cars")
};
