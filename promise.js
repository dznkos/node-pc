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

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empelado con el ID ${id}`);
        } else {
            resolve(null, empleadoDB);
        }
    });
}

/*
getEmpleado(1).then(empleado => {
    console.log('Empleados de BD', empleado);
}, (err) => {
    console.log(err);
}); */


let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontro salario para el usuario`);
        } else {
            resolve({
                nombre: empelado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}

getEmpleado(1).then(empleado => {
    getSalario(empleado).then(resp => {
        console.log(`el salario de empleado es ${resp.nombre} es de ${resp.salario}$`);

    }, (err) => console.log(err));
}, (err) => console.log(err));