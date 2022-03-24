
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('bicis').del()
  await knex('bicis').insert([
    {color: 'rojo', modelo: 'bmx', ubicacion :'[19.284770943610578, -99.13729060406136]'},
    {color: 'blanca', modelo: 'Benoto', ubicacion :'[19.286055116801744, -99.1369912899661]'}
  ]);
};
