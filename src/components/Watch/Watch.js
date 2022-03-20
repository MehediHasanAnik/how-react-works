import React, { useEffect, useState } from "react";
import Display from "../Display/Display";

const Watch = (props) => {
  const [steps, setSteps] = useState(0);

  const increaseSteps = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
    console.log(steps);
  };
  const decreaseSteps = () => {
    const newSteps = steps - 1;
    setSteps(newSteps);
  };

  useEffect(() => {
    console.log(steps);
  }, [steps]);

  return (
    <div style={{ border: "3px solid red", padding: "10px" }}>
      <h1>This is my watch</h1>
      <h2>This is my watch :{steps}</h2>
      <button onClick={increaseSteps}>De dour.....</button>
      <button onClick={decreaseSteps}>De piche dour.....</button>
      <Display name="display" steps={steps}></Display>
    </div>
  );
};

export default Watch;
