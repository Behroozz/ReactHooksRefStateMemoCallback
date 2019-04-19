import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback
} from "react";
import ReactDOM from "react-dom";
import randomColor from "randomcolor";
import randomLetter from "random-letter";
import Color from "./Color";
import Letter from "./Letter";

import "./styles.css";

function CounterWithRef() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#fff");
  const [letter, setLetter] = useState("a");

  useEffect(() => {
    console.log("useEffect");
    // document.body.style.background = randomColor();
    countRef.current.style.height = `${count}px`;
  });
  const countRef = useRef(null);
  // const handleChange = useCallback(() => setColor(randomColor()), []);
  const handleChange = useMemo(() => () => setColor(randomColor()), []);
  return (
    <div>
      <button onClick={() => setCount(state => state + 1)}>My Button</button>
      <h1 ref={countRef}>{count}</h1>
      <Color handleChange={handleChange} color={color} />
      <Letter handleChange={() => setLetter(randomLetter)} letter={letter} />
      <h1 style={{ color }}>{letter}</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CounterWithRef />, rootElement);
