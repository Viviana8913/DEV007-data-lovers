import { AZdata, ZAdata, filtrarDirector, filtrarProductor, filtroBuscar} from './data.js';
import dataGhibli from './data/ghibli/ghibli.js';
//console.log(dataGhibli.films);
const todoGhibli = Object.values(dataGhibli.films);
const contenedorBusqueda = document.getElementById("contenedor-busqueda");
const botonPeliculas = document.getElementById("mostrar-peliculas");
const botonPersonajes = document.getElementById("mostrar-personajes");
const botonLocaciones = document.getElementById("mostrar-locaciones");
const botonVehiculos = document.getElementById("mostrar-vehiculos");
const selectBuscar = document.getElementById("buscador");
const selectOrdenar = document.getElementById("orden");
const selectDirector = document.getElementById("filtroDirectores");
const selectProductor = document.getElementById("filtroProductores");

const peliculas = todoGhibli.filter((element) => {
  return element.title;
});
const personajes = todoGhibli.filter((element) => {
  return element.people;
})
const locaciones = todoGhibli.filter((element) => {
  return element.locations;
});
const vehiculos = todoGhibli.filter((element) => {
  return element.vehicles;
});


botonPeliculas.addEventListener("click", function () {
  //selectDirector.style.display="none";
  //selectProductor.style.display="none";
  //selectOrdenar.style.display="none";
  mostrarPeliculas(peliculas);
});

function mostrarPeliculas (pelis){
  contenedorBusqueda.innerHTML = "";
  pelis.forEach((film) => {        
    contenedorBusqueda.innerHTML +=`
            <div class = "afiche">
            <h2><center>${film.title}</h2>
            <img src="${film.poster}"><br>
            <h3 style="color:#7B21AB;"><center>_______________________________</h3>
            <h4 style="color:puple;">Synopsis:</h4>${film.description}<br><br>
            <b style="color:purple;">Director:</b> ${film.director}<br><br>
            <b style="color:purple;">Producer:</b> ${film.producer}<br><br>
            <b style="color:;">Release date:</b> ${film.release_date}
            </div>
            `;       
  });
}
 
botonPersonajes.addEventListener("click", function () {
  contenedorBusqueda.innerHTML = "";
  personajes.forEach((film) => {
    film.people.forEach(people => {
      contenedorBusqueda.innerHTML += `
         <div class='afiche'>
         <img src='${people.img}' alt='${people.img}'></img>
         <p style="color:purple;">${people.name}</p>
         <p>Gender: ${people.gender}<br>
         Age: ${people.age}<br>
         Eye color: ${people.eye_color}<br>
         Specie: ${people.specie}</p>
         </div>
         `;

    })
                       
  });
});

botonLocaciones.addEventListener("click", function () {
  contenedorBusqueda.innerHTML = "";
  locaciones.forEach((film) => {
    film.locations.forEach(location =>{
      contenedorBusqueda.innerHTML +=
            `<div class='afiche'>
             <img src='${location.img}'>
             <p style="color:purple;">${location.name}</p>
             <p>Climate: ${location.climate}<br>
             Terrain: ${location.terrain}<br>
             Surface water: ${location.surface_water}<br>
             Residents : ${location.residents} </p>
             </div>
             `;

    })
  });
});
botonVehiculos.addEventListener("click", function () {
  contenedorBusqueda.innerHTML = "";
  vehiculos.forEach((film) => {
    film.vehicles.forEach(vehicles => {
      contenedorBusqueda.innerHTML += `
            <div class='afiche'>
             <img src='${vehicles.img}'>
             <p style="color:purple;">${vehicles.name}</p>
             <p>Description: ${vehicles.description}<br>
             Class: ${vehicles.vehicle_class}<br>
             Pilot : ${vehicles.pilot.name} </p>
             </div>
            `;
    })        
  });
});

selectDirector.addEventListener('change', () => {
  const seleccionDir= selectDirector.value;      
  const resultDir= filtrarDirector(seleccionDir);
  mostrarPeliculas (resultDir);
});

selectProductor.addEventListener('change', () => {
  const seleccionPro= selectProductor.value;      
  const resultPro= filtrarProductor(seleccionPro);
  mostrarPeliculas (resultPro);
});

selectOrdenar.addEventListener('change', () => {
  const optionSelec = selectOrdenar.value;
  let resultFinal = "";
  switch (optionSelec){
  case 'az' :
    resultFinal = AZdata();
    break;
  case 'za':    
    resultFinal = ZAdata();
    break;
  default:
    break;
  }
  mostrarPeliculas(resultFinal);
})

selectBuscar.addEventListener('keyup', (e) => {
  const buscarPeli = filtroBuscar(e.target.value, dataGhibli);
  buscarPeli.forEach((film) => {        
    contenedorBusqueda.innerHTML +=`
            <div class = "afiche">
            <h2><center>${film.title}</h2>
            <img src="${film.poster}"><br>
            <h3 style="color:#7B21AB;"><center>_______________________________</h3>
            <h4 style="color:puple;">Synopsis:</h4>${film.description}<br><br>
            <b style="color:purple;">Director:</b> ${film.director}<br><br>
            <b style="color:purple;">Producer:</b> ${film.producer}<br><br>
            <b style="color:;">Release date:</b> ${film.release_date}
            </div>
            `;       
  });
    
})


export default dataGhibli;