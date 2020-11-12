let empleados = [{
    id: 1,
    nombre: 'Fernando'
}, {
    id: 2,
    nombre: 'Andrea'
}, {
    id: 3,
    nombre: 'Paula'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

/* let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empelado con el ID ${id}`);
        } else {
            resolve(null, empleadoDB);
        }
    });
}


getEmpleado(1).then(empleado => {
    console.log('Empleados de BD', empleado);
}, (err) => {
    console.log(err);
}); */


let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let empeladoSalario = empleados.find(empleado => empleado.id === id).salario;

        if (!empeladoSalario) {
            reject(`No se encontro usuario`);
        } else {
            resolve(null, empeladoSalario)
        }
    });
}

getSalario(1).then(empleado => {
    console.log(`el salario de empleado es ${empleado}`);
}, (err) => {
    console.log(err);
})