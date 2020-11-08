import React from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const {data} = await axios.get("/api/products");
        setProducts(data);
      } catch (e) {
        console.log(e);
      }
    }

    fetchProducts();
  })

  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {products.map(product => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product}/>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
