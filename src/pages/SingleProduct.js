import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name } = product;
  return (
    <React.Fragment>
      <section>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <Link to="/products">back to products</Link>
      </section>
    </React.Fragment>
  );
};

export default SingleProduct;
