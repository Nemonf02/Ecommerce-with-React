import React from "react";
import ProductCard from "./ProductCard";



function Product(props) {
  return (
    <React.Fragment>
           


      {props.products.map((item) => {
        return (
          <ProductCard
            id={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price} />
        )
      })}
    </React.Fragment>
  )
}

export default Product;