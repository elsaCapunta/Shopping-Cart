import { IProductos } from "../interfaces/IProductos";

export const UPDATE_PRODUCTOS = "UPDATE_PRODUCTOS";

interface IUpdateProductosAction {
  type: typeof UPDATE_PRODUCTOS;
  payload: IProductos[];
}

export const updateProductos = (productos: IProductos[]): IUpdateProductosAction => {
  return {
    type: UPDATE_PRODUCTOS,
    payload: productos
  };
}