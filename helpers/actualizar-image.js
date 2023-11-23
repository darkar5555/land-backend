const fs = require('fs')

const Usuario = require('../models/usuario');

const borrarImagen = ( path ) => {
    if ( fs.existsSync( path ) ) {
        // borrar la imagen antes
        fs.unlinkSync( path );
    }
}

const actualizarImagen = async (tipo, id, nombreArchivo) => {
    console.log('vamos bien!');

    switch (tipo) {
        case 'usuarios':
            const usuario = await Usuario.findById(id);
            if ( !usuario ) {
                console.log('No es un usuario por id');
                return false;
            }

            const pathViejo = `./uploads/usuarios/${ usuario.img }`;
            borrarImagen(pathViejo);

            usuario.img = nombreArchivo;
            await usuario.save();
            return true;
        break;
    
        default:
            break;
    }
};

module.exports = {
    actualizarImagen
}