import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Component from "./component";

function App() {
  let [counter, setCounter] = useState(0);
  function increment() {
    counter++;
    setCounter(counter);
  }

  function decrement() {
    counter--;
    setCounter(counter);
  }
  return (
    <>
      <Component SignUp="SignUp" />
      <h1>Counter</h1>
      <h3>Value: {counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
