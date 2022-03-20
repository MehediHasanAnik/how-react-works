import React from "react";

const Check = (props) => {
  return (
    <div style={{ border: "2px solid red", padding: "5px" }}>
      <h3>This is check:{props.name}</h3>
      <h3>thsi is steps:{props.steps}</h3>
    </div>
  );
};

export default Check;
