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

agregarC.addEventListener("click",async()=>{
  let horario = new Date();
  let horario2;
  let pais_nombre = await Swal.fire({
    icon:'question',
    title: '¿Cual es el nombre del pais?',
    input: 'select',
    inputOptions:{
      'Europa':{
        Ukraine:'Ukraine',
        Spain:'Spain',
        France:'France',
        Italy:'Italy',
        Germany:'Germany',
        Portugal:'Portugal',
        Swiss:'Swiss',
        UnitedKingdom:'United Kingdom',
        Russia:'Russia',
        Poland:'Poland',
      },
      'America Norte':{
        UnitedStates:'United States',
        Canada:'Canada',
        Mexico:'Mexico',
      },
      'America Sur':{
        Argentina:'Argentina',
        Peru:'Peru',
        Chile:'Chile',
        Brasil:'Brasil',
        Uruguay:'Uruguay',
        Bolivia:'Bolivia',
        Colombia:'Colombia',
        Ecuador:'Ecuador',
        Venezuela:'Venezuela',
      }
    },
    inputLabel: '',
    inputPlaceholder: 'Ingrese el nombre del pais',
    showCancelButton: true,
    inputValidator: (pais_nombre) =>{
        if (pais_nombre == 'Ukraine' || pais_nombre=='Spain'|| pais_nombre=='France'|| pais_nombre=='Italy'|| pais_nombre=='Germany'|| pais_nombre=='Portugal'|| pais_nombre=='Swiss'|| pais_nombre=='United Kingdom'|| pais_nombre=='Russia'|| pais_nombre=='Poland'){
          const minutos = horario.getUTCMinutes()<10?'0' + horario.getUTCMinutes():'' + horario.getUTCMinutes();
          horario2 = horario.getUTCHours()+1 +":"+ minutos;
        }else if(pais_nombre== 'United States' || pais_nombre=='Canada'||pais_nombre=='Mexico'){
          const minutos = horario.getMinutes()<10?'0' +horario.getMinutes(): '' + horario.getMinutes();
          horario2 = horario.getHours()-1 +":"+ minutos;
        }
    }
  })
  
  let clima_pais = await Swal.fire({
    icon:'question',
    title: '¿Cual es el clima actual del pais?(Ingresar con Cº)',
    input: 'text',
    inputLabel: '',
    inputPlaceholder: 'Ingrese el clima del pais'
  })
  let coordenadas_pais = await Swal.fire({
    icon:'question',
    title: '¿Cuales son las coordenadas del pais?(ir a google maps y copiar con click derecho hacia el pais)',
    input: 'text',
    inputLabel: '',
    inputPlaceholder: 'Ingrese las coordenadas del pais'
  })
    
        
        agregarClima(pais_nombre.value,horario2,clima_pais.value,coordenadas_pais.value)
        
        Swal.fire({
          icon:'success',
          title:'Se ha agregado el pais correctamente!'
        })
        
})



let container= document.getElementById("carta")
   
array_localStorage.forEach(pais => {
    let card = document.createElement("div")
    card.classList = 'card';

    
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

    