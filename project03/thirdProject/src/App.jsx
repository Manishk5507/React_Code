import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("Gray");

  return (
      <div className="container" style={{backgroundColor:color}}>
      <div className="outer">
        <button
          onClick={()=>setColor("Red")}
          className="inner"
          style={{ backgroundColor: "Red" }}
        >
          Red
        </button>
        <button
          onClick={()=>setColor("Yellow")}
          className="inner"
          style={{ backgroundColor: "Yellow" }}
        >
          Yellow
        </button>
        <button
          onClick={()=>setColor("Green")}
          className="inner"
          style={{ backgroundColor: "Green" }}
        >
          Green
        </button>
        <button
          onClick={()=>setColor("Blue")}
          className="inner"
          style={{ backgroundColor: "Blue" }}
        >
          Blue
        </button>
        <button
          onClick={()=>setColor("Pink")}
          className="inner"
          style={{ backgroundColor: "Pink" }}
        >
          Pink
        </button>
        <button
          onClick={()=>setColor("Orange")}
          className="inner"
          style={{ backgroundColor: "Orange" }}
        >
          Orange
        </button>
        <button
          onClick={()=>setColor("Black")}
          className="inner"
          style={{ backgroundColor: "Black", color: "White" }}
        >
          Black
        </button>
        <button
          onClick={()=>setColor("White")}
          className="inner"
          style={{ backgroundColor: "White", border: "1px solid black" }}
        >
          White
        </button>
        <button
          onClick={()=>setColor("Gray")}
          className="inner"
          style={{ backgroundColor: "Gray" }}
        >
          Gray
        </button>
        <button
         onClick={()=>setColor("Olive")}
          className="inner"
          style={{ backgroundColor: "Olive" }}
        >
          Olive
        </button>
      </div>
      </div>
  );
}

export default App;
