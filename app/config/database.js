require('../config/setup')
const mongoose = require('mongoose');

const mongoSetting = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(process.env.URLDB, mongoSetting);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, 'Error de conexion en MongoDB'));
mongoose.connection.on('open', console.error.bind(console, 'Conexion Satisfactoria'));
//module.exports = mongoose;