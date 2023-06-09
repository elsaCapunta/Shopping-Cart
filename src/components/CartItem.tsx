import { useEffect, useState } from "react";
import { useShoppingCart } from "../context/ShoppingVartContext"
import StoreItem from "./StoreItem";
import { IProductos } from "../interfaces/IProductos";
import { Button, Stack } from "react-bootstrap";
import { formarCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
    id:number
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps){
    const {removeFromCart} = useShoppingCart();
    const [articulos, setArticulos] = useState<IProductos[]>([]);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setArticulos(data));
  }, []);

  const item = articulos.find(i => i.id === id);
  if(item == null) return null

  return(
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img src={item.image} style={{width:"125px", height:"75px", objectFit:"cover"}}/>
        <div className="me-auto">
            <div>
                {item.title} {quantity > 1 && <span className="text-muted" style={{fontSize:".65rem"}}>
                    x{quantity}
                    </span>}
            </div>
            <div className="text-muted" style={{fontSize:".75rem"}}>
            {formarCurrency(item.price)}
            </div>
            <div>{formarCurrency(item.price * quantity)}</div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
        </div>
    </Stack>
  )
}