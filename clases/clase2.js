const dia = 2;

function diaParOImpar() {
    const moduloDelDia = dia % 2;
    if (moduloDelDia == 0) {
        console.log('El dia es Par')
    } else {
        console.log('El dia es Impar')
    }
}

diaParOImpar()