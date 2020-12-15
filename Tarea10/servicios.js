const url = "https://5fd6dee29dd0db0017ee8919.mockapi.io";

export const getCategorias = async () => {
  let peticion = await fetch(`${url}/categoria`)
  let data = await peticion.json();
  return data;
}

export const getProductos = async () => {
  let peticion = await fetch(`${url}/producto`)
  let data = await peticion.json();
  return data;
}

export const postProducto = async (objProducto) => {
  let peticion = await fetch(`${url}/producto`, {
    method: "POST",
    body: JSON.stringify(objProducto),
    headers: {
      "Content-type": "application/json"
    }
  });
  let data = await peticion.json();
  return data;
}

export const editProducto = async (objProducto) => {
  console.log(objProducto.prod_id);
  let peticion = await fetch(`${url}/producto/${objProducto.prod_id}`, {
    method: "PUT",
    body: JSON.stringify(objProducto),
    headers: {
      "Content-type": "application/json"
    }
  });
  let data = await peticion.json();
  return data;
}
