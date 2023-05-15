import { Col, Row } from "react-bootstrap";
import { IProductos } from "../interfaces/IProductos";
import StoreItem from "../components/StoreItem";
import { useSelector } from 'react-redux';

export const Store = () => {
  const articulos:IProductos[] = useSelector((state: any) => state.productos);
  console.log(articulos);

  return (
    <>
      <h1 style={{color:"white"}}>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {articulos.map((item: IProductos) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};
