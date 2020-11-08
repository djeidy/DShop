import React from 'react';
import PropTypes from 'prop-types';

import {Link} from "react-router-dom";
import {Button, Card, Col, Image, ListGroup, Row} from "react-bootstrap";
import Rating from "../components/Rating";

import axios from "axios";

const ProductScreen = ({match}) => {
  const [product, setProduct] = React.useState({});

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const {data} = await axios.get(`/api/product/${match.params.id}`);

        setProduct(data);
      } catch (e) {
        console.log(e);
      }
    }

    fetchProduct();
  })
  return (
    <>
      <Link to="/" className="btn btn-light">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant={"flush"}>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                text={`${product.numReviews} reviews`}
                value={product.rating}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>
              {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Card>
            <ListGroup variant={"flush"}>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price:
                  </Col>
                  <Col>
                    ${product.price}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Status:
                  </Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="btn btn-block" type={"button"} disabled={!product.countInStock}>
                  add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

ProductScreen.propTypes = {

};

export default ProductScreen;