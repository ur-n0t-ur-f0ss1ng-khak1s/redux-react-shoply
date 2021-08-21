import React from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const inventory = useSelector(st => st.inventory);
  console.log(inventory)
  const dispatch = useDispatch();
  // add a new Product
  const add = id => {
    dispatch({type: "ADD", id:id})
  };

  // delete a Product by id
  const remove = id => {
    dispatch({type: "DELETE", id:id})
  };

  const ProductComponents = Object.keys(inventory).map(key => (
    <Product
      remove={remove}
      key={inventory[key].name}
      name={inventory[key].name}
      price={inventory[key].price}
      description={inventory[key].description}
      image_url={inventory[key].image_url}
      add={add}
      id={key}
    />
  ));

  return (
    <div>
      <ul>{ProductComponents}</ul>
    </div>
  );
}

export default Cart;