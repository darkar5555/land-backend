require('dotenv').config();

const express = require('express');
const cors =  require('cors');

const { dbConnection } = require('./database/config')

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use( cors() );

// Lectura y parseo de body
app.use( express.json() );

// Base de datos
dbConnection();

// Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/asociaciones', require('./routes/asociaciones'));
app.use('/api/lotes', require('./routes/lotes'));
app.use('/api/todo', require('./routes/busquedas'));
app.use('/api/login', require('./routes/auth'));
app.use('/api/upload', require('./routes/uploads'));

app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto' + 3000);
});