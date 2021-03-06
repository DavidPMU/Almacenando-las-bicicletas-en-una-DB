const knex = require ('../database/connection');

let Bicicleta = function(id, color, modelo, ubicacion){
    this.id = id
    this.color = color
    this.modelo = modelo
    this.ubicacion = ubicacion
}

let bicicletasDB =  () => {
    return knex.select('*').from('bicis');
}

for(var item in bicicletasDB) {
    console.log('hola amiguitos');
    Bicicleta.add(new Bicicleta(item.id, item.color, item.modelo, item.ubicacion));
}

Bicicleta.prototype.toString = function(){
    return `Id: ${this.id}, color: ${this.color}`
}

Bicicleta.allBicis = []

Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici);
    await knex('bicis').insert([
        {id: aBici.id ,color: aBici.color, modelo: aBici.modelo, ubicacion: aBici.ubicacion}]);
}

//Añadir un par de bicis:
//let b1 = new Bicicleta(1, 'rojo', 'bmx', [19.284770943610578, -99.13729060406136])
//let b2 = new Bicicleta(2, 'blanca', 'Benotto', [19.286055116801744, -99.1369912899661])

//Bicicleta.add(b1)
//Bicicleta.add(b2)

//Eliminar
Bicicleta.findById = function(aBiciId){
    let aBici = Bicicleta.allBicis.find(x => x.id == aBiciId)
    if(aBici){
        return aBici
    }
    else{
        throw new Error(`No existe una bici con el id: ${aBiciId}`)
    }
}

Bicicleta.removeById = function(aBiciId){
    for(let i = 0; i < Bicicleta.allBicis.length; i++){
        if(Bicicleta.allBicis[i].id == aBiciId){
            //Borrar
            Bicicleta.allBicis.splice(i, 1)
            await knex('bicis').where('id', aBiciId).del()
            break
        }
    }
}

module.exports = Bicicleta