let getNombre = async() => {

    undefined.nombre;

    return 'Luis';
};


getNombre().then(nombre => {
        console.log(nombre);
    })
    .catch(e => {
        console.log('Error de async');
    })