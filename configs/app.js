
const dotenv = require( 'dotenv');
// Carga la configuración del ambiente
dotenv. config () ;
// Crea un objecto con la info rmación de la configuración
const appConfig = {

env: process.env.NODE_ENV || 'development',
express_port: process.env. EXPRESS_PORT || 3306
}
module.exports = appConfig;