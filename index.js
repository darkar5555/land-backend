require('dotenv').config();

const express = require('express');
const cors =  require('cors');

const { dbConnection } = require('./database/config')

// Crear el servidor de express
const app = express();
console.log( process.env.PORT )

// Configurar CORS
app.use( cors() );

// Base de datos
dbConnection();

// Rutas
app.get( '/', (req,res) => {
    res.json({
        ok: true,
        msg: "Hola mundo"
    })
});

app.listen( 3000, () => {
    console.log('Servidor corriendo en el puerto' + 3000);
});