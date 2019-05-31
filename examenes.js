//Paco no estudió mucho para sus últimos exámenes, quiere saber cuántos exámenes tendrá que realizar de nuevo, 
//el programa recibirá la cantidad de exámenes y un arreglo de calificaciones 
//para poder calcular el resultado

function nReprobadas (Reprobadas){
    let nReprobadas = 0
    for (let index = 0; index < Reprobadas.length; index++) {
        if (Reprobadas[index]){
            nReprobadas++ 
        }   
    }
    return nReprobadas
}

const Reprobadas = [true,false,true,false,true,true]
console.log(nReprobadas(Reprobadas))