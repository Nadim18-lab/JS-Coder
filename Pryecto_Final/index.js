let array_localStorage =[]

let lista_de_paises;

//traerlocalStorage
function getLocalStorage(){
        array_localStorage = JSON.parse(localStorage.getItem("pais")) || []
}

getLocalStorage()

// guardarLocalStorage
function saveInLocalStorage(paises){
    localStorage.setItem("pais",JSON.stringify(paises))
}


function agregarClima(pais_nombre,horario,clima_pais,coordenadas_pais){

    let pais = {
        nombre_pais: pais_nombre,
        carga_horaria:horario,
        clima: clima_pais,
        coordenadas: coordenadas_pais
    }
    
    
    array_localStorage.push(pais)
    
    saveInLocalStorage(array_localStorage)

}

let agregarC= document.querySelector("#agregar")

agregarC.addEventListener("click",()=>{
    
        let pais_nombre = prompt("¿Cual es el nombre del pais?")
        let horario = prompt("¿Cual es la carga horaria?(ingresar hora + AM o PM. EJ: 03:00 AM)")
        let clima_pais = prompt("¿Cual es el clima actual del pais?(Ingresar con Cº)")
        let coordenadas_pais = prompt("¿Cuales son las coordenadas del pais?(ir a google maps y copiar con click derecho hacia el pais)")
    
        agregarClima(pais_nombre,horario,clima_pais,coordenadas_pais)
        alert("se ha agregado el pais correctamente")
        
})


let mostrarC = document.querySelector("#mostrar");

mostrarC.addEventListener("click",()=>{
        lista_de_paises.forEach(pais =>{
            console.log("el pais ingresado es: ",pais.nombre_pais,"\nY sus datos son: Carga Horaria: ",pais.carga_horaria,"\nClima: ",pais.clima,"\nCoordenadas: ",pais.coordenadas  )
        })
    
});

let buscarNO = document.querySelector("#buscar_N")

buscarNO.addEventListener("click",() =>{
    
        let nombre_busqueda= prompt("Ingrese el nombre para buscar")
        let nombre_cambiado = nombre_busqueda.toLowerCase()
    
        let pais_encontrado = lista_de_paises.find(pais => nombre_cambiado === pais.nombre_pais.toLowerCase())
    
        if (pais_encontrado == undefined) {
            alert("NO se ha encontrado el pais en el array :( ")
        }else{
            console.log("Se ha encontrado el pais: ",pais_encontrado.nombre_pais)
        }
    
})





let container= document.getElementById("carta")

   
array_localStorage.forEach(pais => {
    let card = document.createElement("div")
    card.classList = 'card';

    console.log(array_localStorage)
        console.log(pais);
         const texto_html= 
        `<div class="cartasuli">
        <div class="card">
      <h5 class="card-title">${pais.nombre_pais}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${pais.carga_horaria}</li>
      <li class="list-group-item">${pais.clima}</li>
      <li class="list-group-item">${pais.coordenadas}</li>
    </ul>
    </div>`
    container.innerHTML += texto_html;
    });




