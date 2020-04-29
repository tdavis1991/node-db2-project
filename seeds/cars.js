exports.seed = async function(knex) {
  await knex("cars").truncate()

  await knex("cars").insert([
      {VIN: '1ZFS2DF2SDFS3', make: 'Ford', model: 'mustang', mileage: '52,000'},
      {VIN: '1ZFS2DF2SD152', make: 'Chevy', model: 'camaro', mileage: '34,000'},
      {VIN: '1ZFS2DF2SD586', make: 'Dodge', model: 'challenger', mileage: '76,000'}
  ])
}