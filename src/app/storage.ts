import { configureStore } from "@reduxjs/toolkit";
import { IProductos } from "../interfaces/IProductos";

// Definimos la acción para actualizar el estado de los productos
interface IUpdateProductosAction {
  type: "UPDATE_PRODUCTOS";
  payload: IProductos[];
}

// Definimos el estado inicial
interface IInitialState {
  productos: IProductos[];
  dataLoaded: boolean;
}

const initialState: IInitialState = {
  productos: [],
  dataLoaded: false,
};

// Definimos el reducer que maneja las acciones para actualizar el estado
const productosReducer = (
  state = initialState,
  action: IUpdateProductosAction
) => {
  switch (action.type) {
    case "UPDATE_PRODUCTOS":
      return {
        ...state,
        productos: action.payload,
        dataLoaded: true,
      };
    default:
      return state;
  }
};

// Creamos el store de Redux con el reducer
const store = configureStore({ reducer: productosReducer });

// Verificamos si ya se cargaron los datos de la API
const dataLoaded = localStorage.getItem("dataLoaded");

// Si no se han cargado los datos, realizamos la llamada a la API y guardamos los datos en el store
if (!dataLoaded) {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      store.dispatch({
        type: "UPDATE_PRODUCTOS",
        payload: data,
      });

      // Guardamos una bandera en localStorage para indicar que ya se cargaron los datos
      localStorage.setItem("dataLoaded", "true");
    })
    .catch((error) => console.error(error));
}

export default store;
