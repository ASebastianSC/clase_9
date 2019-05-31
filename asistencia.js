//Joel quiere ver el porcentaje de veces que falto a clases, 
//el programa recibirá la cantidad de asistencias y un arreglo de asistencias para poder calcular el resultado,
//cada elemento esta representado por un valor booleano

function porcentaje (asistencias){
    let nAsistencias = 0
    for (let index = 0; index < asistencias.length; index++) {
        if (asistencias[index]){
            nAsistencias++ 
        }     
    }
    const porcentaje = (nAsistencias / asistencias.length) * 100 
    return porcentaje
}
const asistencias = [true,false,false,true,true,true]

console.log(porcentaje(asistencias))