import { useState } from "react";
import "./App.css"; 

export default function CalculadoraNormal() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay("Erro");
      }
    } else if (value === "AC") {
      setDisplay("");
    } else if (value === "DEL") {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay(display + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "AC", "DEL"
  ];

  return (
    <div className="calculator">
      <h2>Calculadora Normal</h2>
      <div className="display">{display}</div>
      <div className="button-grid">
        {buttons.map((btn, i) => (
          <button
            key={i}
            className="button"
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
