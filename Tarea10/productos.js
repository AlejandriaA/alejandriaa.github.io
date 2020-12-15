import { getCategorias, getProductos, postProducto, editProducto } from "./servicios.js";

const inputCrearNombre = document.getElementById("inputCrearNombre");
const inputCrearPrecio = document.getElementById("inputCrearPrecio");
const inputCrearImagen = document.getElementById("inputCrearImagen");
const inputCrearStock = document.getElementById("inputCrearStock");
const inputEditarNombre = document.getElementById("inputEditarNombre");
const inputEditarPrecio = document.getElementById("inputEditarPrecio");
const inputEditarImagen = document.getElementById("inputEditarImagen");
const inputEditarStock = document.getElementById("inputEditarStock");
const selectCrearCategoria = document.getElementById("selectCrearCategoria");
const selectEditarCategoria = document.getElementById("selectEditarCategoria");
const productosContainer = document.getElementById("productosContainer");
const formCrearProducto = document.getElementById("formCrearProducto");
const formEditarProducto = document.getElementById("formEditarProducto");
const radioCards = document.getElementById("radioCards");
const radioTabla = document.getElementById("radioTabla");
const btnCrearProducto = document.getElementById("btnCrearProducto");
const crearProductoModal = document.getElementById("crearProductoModal");
const editarProductoModal = document.getElementById("editarProductoModal");
const modalCrear = new bootstrap.Modal(crearProductoModal);
const modalEditar = new bootstrap.Modal(editarProductoModal);

let modo = "tabla";
let productos = [];
let categorias = [];

const mapearProductos = () => {
  productos = productos.map(prod => {
    prod.categoria = categorias.find(cat => {
      if (cat.cat_id == prod.cat_id) {
        return cat;
      }
    });
    return prod;
  });
}

const dibujarProductos = () => {

  productosContainer.innerHTML = "";
  if (modo === "tabla") {
    let tabla = document.createElement("table");
    tabla.classList.add("table", "table-success", "table-striped", "mt-4", "mb-4")
    tabla.innerHTML = `
      <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Categoría</th>
          <th>Imagen</th>
          <th></th>
        </tr>
      </thead>`;
    let tbody = document.createElement("tbody");
    productos.forEach((prod, i) => {
      let filaTmp = document.createElement("tr");
      filaTmp.innerHTML = `
        <td>${i}</td>
        <td>${prod.prod_id}</td>
        <td>${prod.prod_nom}</td>
        <td>${prod.prod_pre}</td>
        <td>${prod.prod_sto}</td>
        <td>${prod.categoria.cat_nom}</td>
        <td><img src="${prod.prod_img}" width="100" class="rounded-circle"></td>`;
      let td = document.createElement("td");
      let btn = document.createElement("button");
      btn.classList.add("btn", "btn-outline-dark", "btn-sm");
      btn.setAttribute("id", "btnEditarProducto");
      btn.innerHTML = `<i class="far fa-edit"></i>`;
      td.appendChild(btn);
      filaTmp.appendChild(td);
      tbody.appendChild(filaTmp);
      btn.onclick = () => {
        const close = document.getElementById("closeModal");
        const optionSelected = selectEditarCategoria.querySelector(`option[value="${prod.cat_id}"]`);
        inputEditarNombre.setAttribute("value", `${prod.prod_nom}`);
        inputEditarPrecio.value = prod.prod_pre;
        inputEditarStock.value = prod.prod_sto;
        optionSelected.setAttribute("selected", "selected");
        inputEditarImagen.value = prod.prod_img;
        modalEditar.show();
        close.onclick = () => {
          optionSelected.removeAttribute("selected");
        }
        formEditarProducto.onsubmit = e => {
          e.preventDefault();
          if (validarControles([inputEditarNombre, inputEditarPrecio, inputEditarImagen, inputEditarStock]) === false) {
            let objProducto = {
              "prod_id": prod.prod_id,
              "prod_nom": inputEditarNombre.value.trim(),
              "prod_pre": inputEditarPrecio.value.trim(),
              "prod_sto": inputEditarStock.value,
              "prod_sku": prod.prod_sku,
              "cat_id": selectEditarCategoria.value,
              "prod_img": inputEditarImagen.value.trim()
            };
            editProducto(objProducto).then((data) => {
              console.log(data);
              getRecursos();
              modalEditar.hide();
              formEditarProducto.reset();
            })
          }
        }
      }
    });
    tabla.appendChild(tbody);
    productosContainer.appendChild(tabla);
  } else {
    productos.forEach((prod) => {
      let card = document.createElement("div");
      card.classList.add("col-xl-3", "col-lg-3", "col-md-4", "col-sm-6", "mt-4", "mb-4");
      let cardInner = document.createElement("div");
      cardInner.classList.add("card", "shadow");
      let cardHeader = document.createElement("div");
      cardHeader.classList.add("card-header", "d-flex", "justify-content-between");
      let stock = document.createElement("div");
      stock.innerHTML = `stock : ${prod.prod_sto}`;
      let btn = document.createElement("button");
      btn.classList.add("btn", "btn-outline-dark", "btn-sm");
      btn.setAttribute("id", "btnEditarProducto");
      btn.innerHTML = `<i class="far fa-edit"></i>`;
      cardHeader.appendChild(stock);
      cardHeader.appendChild(btn);
      let img = document.createElement("img");
      img.setAttribute("src", `${prod.prod_img}`);
      img.setAttribute("height", '200px');
      let cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      cardBody.innerHTML = `<h5 class="card-title text-capitalize">${prod.prod_nom}</h5><small class="text-muted">${prod.categoria.cat_nom}</small>`;
      let cardFooter = document.createElement("div");
      cardFooter.classList.add("card-footer", "text-end");
      cardFooter.innerHTML = `S/ ${prod.prod_pre}`;
      cardInner.appendChild(cardHeader);
      cardInner.appendChild(img);
      cardInner.appendChild(cardBody);
      cardInner.appendChild(cardFooter);
      card.appendChild(cardInner);
      productosContainer.appendChild(card);
      btn.onclick = () => {
        const close = document.getElementById("closeModal");
        const optionSelected = selectEditarCategoria.querySelector(`option[value="${prod.cat_id}"]`);
        inputEditarNombre.setAttribute("value", `${prod.prod_nom}`);
        inputEditarPrecio.value = prod.prod_pre;
        inputEditarStock.value = prod.prod_sto;
        optionSelected.setAttribute("selected", "selected");
        inputEditarImagen.value = prod.prod_img;
        modalEditar.show();
        close.onclick = () => {
          optionSelected.removeAttribute("selected");
        }
        formEditarProducto.onsubmit = e => {
          e.preventDefault();
          if (validarControles([inputEditarNombre, inputEditarPrecio, inputEditarImagen, inputEditarStock]) === false) {
            let objProducto = {
              "prod_id": prod.prod_id,
              "prod_nom": inputEditarNombre.value.trim(),
              "prod_pre": inputEditarPrecio.value.trim(),
              "prod_sto": inputEditarStock.value,
              "prod_sku": prod.prod_sku,
              "cat_id": selectEditarCategoria.value,
              "prod_img": inputEditarImagen.value.trim()
            };
            editProducto(objProducto).then((data) => {
              console.log(data);
              getRecursos();
              modalEditar.hide();
              formEditarProducto.reset();
            })
          }
        }
      }
    });
  }
}

const poblarSelectCrearProducto = () => {
  selectCrearCategoria.innerHTML = "";
  categorias.forEach(cat => {
    let optionTmp = document.createElement("option")
    optionTmp.innerText = cat.cat_nom;
    optionTmp.value = cat.cat_id;
    selectCrearCategoria.appendChild(optionTmp);
  })
}

const poblarSelectEditarProducto = () => {
  selectEditarCategoria.innerHTML = "";
  categorias.forEach(cat => {
    let optionTmp = document.createElement("option")
    optionTmp.innerText = cat.cat_nom;
    optionTmp.value = cat.cat_id;
    selectEditarCategoria.appendChild(optionTmp);
  })
}

const getRecursos = async () => {
  productos = await getProductos();
  categorias = await getCategorias();
  mapearProductos();
  dibujarProductos();
  poblarSelectCrearProducto();
  poblarSelectEditarProducto();
}
getRecursos();

let onCheck = (e) => {
  if (radioTabla.checked === true) {
    modo = "tabla";
  } else {
    modo = "cards";
  }
  dibujarProductos();
}

radioCards.onchange = onCheck;
radioTabla.onchange = onCheck;

btnCrearProducto.onclick = () => {
  modalCrear.show();
}

const validarControles = (controles = []) => {
  let errores = false;
  controles.forEach((control) => {
    control.classList.remove("is-invalid");
    control.classList.add("is-valid")
    if (control.value.trim() === "") {
      errores = true;
      control.classList.add("is-invalid");
      control.classList.remove("is-valid");
    }
  })
  return errores;
}

formCrearProducto.onsubmit = e => {
  e.preventDefault();
  if (validarControles([inputCrearNombre, inputCrearPrecio, inputCrearImagen, inputCrearStock]) === false) {
    let objProducto = {
      "prod_nom": inputCrearNombre.value.trim(),
      "prod_pre": inputCrearPrecio.value.trim(),
      "prod_sto": inputCrearStock.value,
      "prod_sku": uuid.v4(),
      "cat_id": selectCrearCategoria.value,
      "prod_img": inputCrearImagen.value.trim()
    };
    postProducto(objProducto).then((data) => {
      console.log(data);
      getRecursos();
      modalCrear.hide();
      formCrearProducto.reset();
    })
  }
}