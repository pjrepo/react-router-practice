import React from "react";
import { Link } from "react-router-dom";
import products from "../data";

const Products = () => {
  return (
    <React.Fragment>
      <section>
        <h2>products</h2>
        <div>
          {products.map((product) => {
            return (
              <article key={product.id}>
                <h5>{product.name}</h5>
                <Link to={`/products/${product.id}`}>more info</Link>
              </article>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Products;
