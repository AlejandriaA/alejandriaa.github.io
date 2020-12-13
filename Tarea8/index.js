const tipos = [
  { idTipo: 1, nombreTipo: "Platos" },
  { idTipo: 2, nombreTipo: "Bebidas" },
  { idTipo: 3, nombreTipo: "Postres" }
];

const categorias = [
  { idCategoria: 1, nombreCategoria: "Fondo", idTipo: 1 },
  { idCategoria: 2, nombreCategoria: "Entradas", idTipo: 1 },
  { idCategoria: 3, nombreCategoria: "Sopas", idTipo: 1 },
  { idCategoria: 4, nombreCategoria: "Cocktails", idTipo: 2 },
  { idCategoria: 5, nombreCategoria: "Refrescos", idTipo: 2 },
  { idCategoria: 6, nombreCategoria: "Jugo de Frutas", idTipo: 2 },
  { idCategoria: 7, nombreCategoria: "Helados", idTipo: 3 },
  { idCategoria: 8, nombreCategoria: "Tortas", idTipo: 3 }
]

const selectTipo = document.getElementById("selectTipo");
const selectCategoria = document.getElementById("selectCategoria");
const formPlatos = document.getElementById("formPlatos");
const inputNombre = document.getElementById("inputNombre");
const inputPrecio = document.getElementById("inputPrecio");
const tbody = document.getElementById("tbody");
const formFieldset = document.getElementById("formFieldset");

const llenarTipos = () => {
  tipos.forEach((tipo) => {
    let miOption = document.createElement("option");
    miOption.innerText = tipo.nombreTipo;
    miOption.value = tipo.idTipo;
    selectTipo.appendChild(miOption);
  })
}
llenarTipos();

const llenarCategoriasPorId = (idTipo) => {
  if (idTipo === 0) {
    selectCategoria.innerHTML = "<option value='0'>-Seleccione Categoria-</option>";
    return;
  }
  selectCategoria.innerHTML = "";
  
  let categoriasPorTipo = categorias.filter((cat) => {
    if (cat.idTipo === idTipo) {
      return cat;
    }
  });

  categoriasPorTipo.forEach((cat) => {
    let optionCat = document.createElement("option");
    optionCat.innerText = cat.nombreCategoria;
    optionCat.value = cat.idCategoria;
    selectCategoria.appendChild(optionCat);
  })
}

selectTipo.onchange = (e) => {
  let idTipo = +selectTipo.value;
  llenarCategoriasPorId(idTipo);
}

let contadorSubmit = 0;

formPlatos.onsubmit = (e) => {
  e.preventDefault();

  let nombre = inputNombre.value;
  let precio = +inputPrecio.value;
  let tipo = selectTipo.value;
  let categoria = selectCategoria.value;

  if (nombre.trim() === "" || precio <= 0 || tipo === "0" || categoria === "0") {
    formFieldset.classList.add("errorFormulario");
    alert("Por favor llene todos los campos");
    return;
  }

  contadorSubmit++;

  let objPlato = {
    id: contadorSubmit,
    nombre: nombre,
    precio: precio,
    tipo: tipos[tipo-1].nombreTipo,
    categoria: categorias[categoria-1].nombreCategoria
  }

  let tr = document.createElement("tr");
  let tdId = document.createElement("td");
  let tdNombre = document.createElement("td");
  let tdPrecio = document.createElement("td");
  let tdTipo = document.createElement("td");
  let tdCategoria = document.createElement("td");

  tr.appendChild(tdId);
  tr.appendChild(tdNombre);
  tr.appendChild(tdPrecio);
  tr.appendChild(tdTipo);
  tr.appendChild(tdCategoria);

  tdId.innerText = objPlato.id;
  tdNombre.innerText = objPlato.nombre;
  tdPrecio.innerText = objPlato.precio;
  tdTipo.innerText = objPlato.tipo;
  tdCategoria.innerText = objPlato.categoria;

  if(contadorSubmit == 1){
    tbody.innerHTML = "";
  }

  tbody.appendChild(tr);

  formFieldset.classList.remove("errorFormulario");
  formPlatos.reset();
  selectCategoria.innerHTML = "<option value='0'>-Seleccione Categoria-</option>";
}

inputNombre.focus();