import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingVartContext";
import { CartItem } from "./CartItem";
import { formarCurrency } from "../utilities/formatCurrency";
import { IProductos } from "../interfaces/IProductos";
import { useEffect, useState } from "react";

type ShoppingCartProps = {
    isOpen:boolean
}

export function ShoppingCart({isOpen}:ShoppingCartProps){
    const {closeCart, cartItems} = useShoppingCart();
    const [articulos, setArticulos] = useState<IProductos[]>([]);


    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setArticulos(data));
    }, []);
    return <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {
                    cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))
                }
                <div className="ms-auto fw-bold fs-5">
                    Total{" "}
                    {
                        formarCurrency(
                            cartItems.reduce((total, cartItem) => {
                                const item = articulos.find(i => i.id === cartItem.id)
                                return total + (item?.price || 0) * cartItem.quantity
                            }, 0)
                            
                        )
                    }
                </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
}