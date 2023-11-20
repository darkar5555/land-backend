const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.DDBB_CNN);
        console.log('DDBB online');
    } catch (error) {
        console.log(error);
        throw new Error('Error al tratar de iniciar la DDBB')
    }
}
module.exports = {
    dbConnection
}