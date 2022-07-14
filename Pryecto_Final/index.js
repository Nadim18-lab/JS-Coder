
function mostrarAvance(){
    alert("Proximamente!")
}

let lista_de_paises= [
    
]

function agregarClima(pais_nombre,horario,clima_pais,coordenadas_pais){

    let lista_de_paises2=
        {
            nombre_pais: pais_nombre,
            carga_horaria:horario,
            clima: clima_pais,
            coordenadas: coordenadas_pais,
        }

    return lista_de_paises2;
}

function agregarClima2(){

    let pais_nombre = prompt("¿Cual es el nombre del pais?")
    let horario = prompt("¿Cual es la carga horaria?(ingresar hora + AM o PM. EJ: 03:00 AM)")
    let clima_pais = prompt("¿Cual es el clima actual del pais?(Ingresar con Cº)")
    let coordenadas_pais = prompt("¿Cuales son las coordenadas del pais?(ir a google maps y copiar con click derecho hacia el pais)")

    lista_de_paises.push(agregarClima(pais_nombre,horario,clima_pais,coordenadas_pais))
    alert("se ha agregado el pais correctamente")
    
    return lista_de_paises;
}


function mostrarPaises(){
    lista_de_paises.forEach(pais =>{
        console.log("el pais ingresado es: ",pais.nombre_pais,"\nY sus datos son: Carga Horaria: ",pais.carga_horaria,"\nClima: ",pais.clima,"\nCoordenadas: ",pais.coordenadas  )
    })
}

function buscarPorNombre(){
    let nombre_busqueda= prompt("Ingrese el nombre para buscar")
    let nombre_cambiado = nombre_busqueda.toLowerCase()

    let pais_encontrado = lista_de_paises.find(pais => nombre_cambiado === pais.nombre_pais.toLowerCase())

    if (pais_encontrado == undefined) {
        console.log("NO se ha encontrado el pais en el array :( ")
    }else{
        console.log("Se ha encontrado el pais: ",pais_encontrado.nombre_pais)
    }

}

