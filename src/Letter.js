import React from "react";

export default function Letter(props) {
  return (
    <div>
      <button onClick={props.handleChange}>✏️</button>
      <h3>{props.letter}</h3>
    </div>
  );
}
