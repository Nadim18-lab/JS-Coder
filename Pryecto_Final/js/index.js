//API
let container= document.getElementById("carta")
let nombrePaisHtml = document.querySelector(".card-title")
let tempPaisHtml = document.querySelector(".weathDescripcion")
let weathPaisHtml = document.querySelector(".climaDescripcion")
let horaPaisHtml = document.querySelector(".horaDescripcion")


let climaAnimado = document.querySelector('#icono-animado')

let array_localStorage =[]

let lista_de_paises;

//traerlocalStorage
function getLocalStorage(){
        array_localStorage = JSON.parse(localStorage.getItem("pais")) || []
}

getLocalStorage()


let agregarC= document.querySelector("#agregar")

agregarC.addEventListener("click",async()=>{
  let horario = new Date();
  let horario2;
  let hh= 'PM';
  let horario3;
   pais_nombre = await Swal.fire({
    icon:'question',
    title: '¿Cual es el nombre del pais?',
    input: 'select',
    inputOptions:{
      'Europa':{
        690791:'Ukraina',
        3117735:'España',
        2968815:'Francia',
        3168222:'Italia',
        2885657:'Alemania',
        2267056:'Portugal',
        2660512:'Suiza',
        3333169:'Reino Unido',
        524901:'Rusia',
        798544:'Polonia',
      },
      'America Norte':{
        4903565:'Estados Unidos',
        6087824:'Canada',
        3530597:'Mexico',
      },
      'America Sur':{
        3435910:'Argentina',
        3941584:'Peru',
        3895114:'Chile',
        3472339:'Brasil',
        3441575:'Uruguay',
        3911925:'Bolivia',
        3688689:'Colombia',
        3652462:'Ecuador',
        3646738:'Venezuela',
      }
    },
    inputLabel: '',
    inputPlaceholder: 'Ingrese el nombre del pais',
    showCancelButton: true,
    inputValidator: (pais_nombre) =>{

        if (pais_nombre == 690791 || pais_nombre==3117735|| pais_nombre==2968815|| pais_nombre==3168222|| pais_nombre==2885657|| pais_nombre==2267056|| pais_nombre==2660512|| pais_nombre==3333169|| pais_nombre==524901|| pais_nombre==798544){

          console.log(horario.getHours()+4)
          

          if(horario.getHours()+4 >= 23){
            horario2 = horario.getHours()+4-12;
            hh = 'AM'
          }
          if (horario.getUTCHours()== 0) {
            horario2 = 12
          }

          const minutos = horario.getUTCMinutes()<10?'0' + horario.getUTCMinutes():'' + horario.getUTCMinutes();
          horario2 = horario.getUTCHours()+1 +":"+ minutos;

          horario3 = horario2+" "+hh

        }else if(pais_nombre== 4903565 || pais_nombre==6087824||pais_nombre==3530597){

          if(horario.getHours() >= 23){
            horario2 = horario.getHours()-12;
            hh = 'AM'
          }
          if (horario.getHours()== 0) {
            horario2 = 12
          }

          const minutos = horario.getMinutes()<10?'0' +horario.getMinutes(): '' + horario.getMinutes();
          horario2 = horario.getHours()-1 +":"+ minutos;

          horario3 = horario2+" "+hh
          
        }else if(pais_nombre==3941584 || pais_nombre== 3646738 || pais_nombre== 3652462 || pais_nombre == 3688689){
          if(horario.getHours() >= 23){
            horario2 = horario.getHours()-12;
            hh = 'AM'
          }
          if (horario.getHours()== 0) {
            horario2 = 12
          }

          const minutos = horario.getMinutes()<10?'0' +horario.getMinutes(): '' + horario.getMinutes();
          horario2 = horario.getHours()-2 +":"+ minutos;

          horario3 = horario2+" "+hh
        }else if (pais_nombre==3435910 ||pais_nombre==3895114 ||pais_nombre==3472339 ||pais_nombre==3441575 ||pais_nombre==3911925){
          if(horario.getHours() >= 23){
            horario2 = horario.getHours()-12;
            hh = 'AM'
          }
          if (horario.getHours()== 0) {
            horario2 = 12
          }

          const minutos = horario.getMinutes()<10?'0' +horario.getMinutes(): '' + horario.getMinutes();
          horario2 = horario.getHours() +":"+ minutos;

          horario3 = horario2+" "+hh
        }
        
      
        if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(posicion =>{
            
              const url = `https://api.openweathermap.org/data/2.5/weather?id=`+pais_nombre+`&appid=44dd034ab45821216e9ebc87d6a732bd`
            
            fetch(url)
              .then(response =>{return response.json()})
              .then(data =>{

                let nameValue = data['name'];
                let weathValue = data['weather'][0]['description'];
                let weathIconValue = data['weather'][0]['icon']
                const urlIcon= `https://openweathermap.org/img/wn/${weathIconValue}.png`
                clima_pais = data.main.temp - 273.15

                let clima_pais_redondeado = Math.round(clima_pais)+ " Cº"

                let cartasuli = document.createElement("div")
                  cartasuli.classList = 'cartasuli'

                 cartasuli.innerHTML= 
                `
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${nameValue}</h5>
                  <img id="icono-animado" src="${urlIcon}" alt="" height="128" width="128">
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item horaDescripcion">${horario3}</li>
                  <li class="list-group-item weathDescripcion">${weathValue}</li>
                  <li class="list-group-item climaDescripcion">${clima_pais_redondeado}</li>
                </ul>
              </div>
                `
                container.appendChild(cartasuli);
                
              })
              .catch(error =>{
                console.log(error)
              })
            
          })
          
        }

    },
  })
  
        
})
    