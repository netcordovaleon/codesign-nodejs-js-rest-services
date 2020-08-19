//invocar librerias con valores directos
require('./app/config/setup')
require('./app/config/database');
//librerias de npm
const express = require('express');
const bodyParser = require('body-parser');
//handlers
const handlerError = require('./app/config/handler-error')
//rutas api rest
const auth = require('./routes/auth-routes');
const user = require('./routes/user-routes');
//configuracion de express
const app = express();
//seteamos la clave de jwt a nivel general
app.set('secretKey', process.env.SEED_AUTENTICATION);
//configuracion para permitir leer objetos en verbos post
app.use(bodyParser.urlencoded({ extended: false }));
//rutas de servicios api rest
app.use('/v1.0/auth', auth);
app.use('/v1.0/user', user);
//handler error de excepciones
app.use(handlerError);
//servir el servicio en el puerto correspondiente local o server
app.listen(process.env.PORT, function () { console.log(`El servidor se encuentra en el puerto: ${process.env.PORT}`); });