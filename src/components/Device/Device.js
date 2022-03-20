import React from "react";
import Display from "../Display/Display";
import Price from "../Price/Price";

const Device = (props) => {
  return (
    <div>
      <h2>Name:{props.name}</h2>
      <Price price={props.price}></Price>
    </div>
  );
};

export default Device;
