const populares = document.getElementById("populares");
const resultados = document.getElementById("resultados");
const formBusqueda = document.getElementById("formBusqueda");
const inputBusqueda = document.getElementById("inputBusqueda");

const dibujarTarjetas = ({ results = [] },tipo) => {
  results.forEach((peli) => {
    const div = document.createElement("div");
    div.classList.add("col-xl-3", "col-lg-3", "col-md-4", "col-sm-6", "mb-3");
    div.innerHTML = `<div class="card shadow">
                      <img src="https://image.tmdb.org/t/p/w500${peli.poster_path}" height=400px alt="" class="card-img-top">
                      <div class="card-body">
                        <h5 class="card-title">
                          ${peli.title}
                        </h5>
                        <p class="card-text">
                          ${peli.overview.substring(0, 100)}... <a href="#">Leer mas</a>
                        </p>
                        <small class="text-muted">
                          ${peli.release_date}
                        </small>
                      </div>
                    </div>`;
    tipo.appendChild(div);
  })
}

const getPeliculasPopulares = () => {
  const urlTMDB = "https://api.themoviedb.org/3/movie/popular?api_key=9ff0c80b02e079055fc00a2b46383b3f&language=es-ES";
  fetch(urlTMDB).then((peticion) => {
    peticion.json().then((data) => {
      populares.innerHTML = `<h4>Películas populares</h4><br><br>`;
      dibujarTarjetas(data,populares);
    })
  })
}

getPeliculasPopulares();

formBusqueda.onsubmit = e => {
  e.preventDefault();
  let busqueda = inputBusqueda.value.trim();
  if (busqueda.length < 1) {
    resultados.innerHTML = "";
    return;
  }
  busqueda = encodeURI(busqueda);
  let url = `https://api.themoviedb.org/3/search/movie?api_key=9ff0c80b02e079055fc00a2b46383b3f&language=es-ES&query="${busqueda}"&page=1&include_adult=false`
  fetch(url).then((peticion) => {
    peticion.json().then((data) => {
      resultados.innerHTML = `<h4>Resultados de búsqueda</h4><br><br>`;
      dibujarTarjetas(data,resultados);
    })
  })
}

inputBusqueda.onkeyup = (e) => {
  let busqueda = inputBusqueda.value.trim();
  if (busqueda.length < 1) {
    resultados.innerHTML = "";
    return;
  }
  busqueda = encodeURI(busqueda);
  let url = `https://api.themoviedb.org/3/search/movie?api_key=9ff0c80b02e079055fc00a2b46383b3f&language=es-ES&query="${busqueda}"&page=1&include_adult=false`
  fetch(url).then((peticion) => {
    peticion.json().then((data) => {
      resultados.innerHTML = `<h4>Resultados de búsqueda</h4><br><br>`;
      dibujarTarjetas(data,resultados);
    })
  })
}