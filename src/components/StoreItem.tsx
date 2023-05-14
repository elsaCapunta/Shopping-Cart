import { IProductos } from '../interfaces/IProductos';
import { Button, Card } from 'react-bootstrap';
import { formarCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingVartContext';

const StoreItem = ({id,title,price,image}:IProductos) => {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();
    const quantity = getItemQuantity(id);
    return (
        <Card className='h-100'>
            <Card.Img
            variant='top'
            src={image}
            height="200px"
            style={{objectFit:"cover"}}
            />
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                <span className='fs-2'>{title}</span>
                    <span className='ms-2 text-muted'>{formarCurrency(price)}</span>
                </Card.Title>
                <div className='mt-auto'>
                    {quantity === 0 ? (
                        <Button className='w-100' onClick={()=> increaseCartQuantity(id)}>+ Add to Cart</Button>
                    ): <div className='d-flex align-items-center flex-column' style={{gap:".5rem"}}>
                        <div className='d-flex align-items-center justify-content-center'
                            style={{gap:".5rem"}}>
                                <Button onClick={()=> decreaseCartQuantity(id)}>-</Button>
                                <div>
                                <span className='fs-3'>{quantity}</span> in cart

                                </div>
                                <Button onClick={()=> increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button variant='danger' size='sm' onClick={()=> removeFromCart(id)}>Remove</Button>
                        </div>}
                </div>
            </Card.Body>
        </Card>
    );
};21

export default StoreItem;