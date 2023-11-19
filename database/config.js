const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log('DDBB online');
    } catch (error) {
        console.log(error);
        throw new Error('Error al tratar de iniciar la DDBB')
    }
}

module.exports = {
    dbConnection
}