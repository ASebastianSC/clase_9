//A Daniel le acaban de mandar una lista con sus calificaciones, 
//quiere saber si su promedio es suficiente para tener una beca este año, 
//el promedio mínimo que necesita es 8, 
//el programa recibirá la cantidad de calificaciones y un arreglo de calificaciones 
//para poder calcular el resultado

function promedio (calificaciones) {
    let sumadecalificaciones = 0
    for (let index = 0; index < calificaciones.length; index++) {
        sumadecalificaciones += calificaciones[index] 
    }
    const promedio = sumadecalificaciones / calificaciones.length
    return promedio
}
const calificaciones = [7,7,1,0,7]  
    if (promedio(calificaciones) >= 8){
        console.log ("recibirás tu beca :)")
    } else{
        console.log ("esfuerzate más")
    }
