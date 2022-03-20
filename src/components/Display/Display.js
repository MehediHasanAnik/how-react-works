import React from "react";
import Check from "../Check/Check";

const Display = (props) => {
  return (
    <div style={{ color: "green", border: "5px solid blue" }}>
      <h2>This is display:{props.name}</h2>
      <h3>steps:{props.steps}</h3>
      <Check name="head check" steps={props.steps}></Check>
    </div>
  );
};

export default Display;
