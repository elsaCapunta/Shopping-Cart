import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { IProductos } from "../interfaces/IProductos";
import StoreItem from "../components/StoreItem";


export const Store = () => {
  const [articulos, setArticulos] = useState<IProductos[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setArticulos(data));
  }, []);

  return (
    <>
      <h1>Store</h1>
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
