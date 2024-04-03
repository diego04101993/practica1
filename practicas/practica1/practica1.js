const montoPrevisto = 50;
const ordenes = 80;
const dia = 17;

function proyeccionOrdenes() {
    if (ordenes > montoPrevisto) {
        console.log('Incrementar su capacidad en el siguiente día, ya que el numero de ordenes fue de:', ordenes, 'y el monto previsto fue de:', montoPrevisto);
    } else if (ordenes < montoPrevisto) {
        console.log('Reducir su capacidad del siguiente día y ahorrar gastos, ya que el numero de ordenes fue de:', ordenes, 'y el monto previsto fue de:', montoPrevisto)
    } else {
        console.log('No tuvimos ninguna perdida, ya que el numero de ordenes fue de:', ordenes, 'y el monto previsto fue de:', montoPrevisto)
    }
}

function diaParOImpar() {
    if (dia % 2 !== 0 && ordenes > montoPrevisto) {
        console.log('El dia', dia, 'es un dia impar y tambien las ordenes superan a el monto previsto, prepararnos para el dia de mañana')
    } else if (dia % 2 !== 0) {
        console.log('El dia', dia, 'es un dia impar, por lo tanto estaremos tablas en la produccion y las ordenes')
    } else {
        console.log('El dia', dia, 'es un dia par, por lo tanto debemos incrementar la capacidad')
    }
}

function porcentaje() {
    const resultado = (ordenes * 100) / montoPrevisto
    console.log('El porcentaje de ordenes en este dia fue de:', resultado, '%')
}

proyeccionOrdenes();
diaParOImpar();
porcentaje();
