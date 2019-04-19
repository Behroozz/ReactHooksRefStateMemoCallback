import React from "react";

const Color = React.memo(function Color(props) {
  console.log("Color component rendered");
  return (
    <div>
      <button onClick={props.handleChange}>🖍️</button>
      <h3>{props.color}</h3>
    </div>
  );
});

export default Color;
