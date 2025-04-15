import { useState } from "react";
import CalculadoraNormal from "./calculadoras/CalculadoraNormal";
import CalculadoraCientifica from "./calculadoras/CalculadoraCientifica";
import CalculadoraFinanceira from "./calculadoras/CalculadoraFinanceira";

export default function Calculadora() {
  const [modo, setModo] = useState("normal");

  return (
    <>
      <style>{`
        .calc-container {
          text-align: center;
          padding: 20px;
        }

        .calc-select {
          margin-bottom: 20px;
          padding: 10px 20px;
          font-size: 16px;
          background-color: black;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none
          text-aling: center;
          }

        .calc-select:focus {
          outline: none;
          box-shadow: 0 0 5px limegreen;
        }

        option {
          background-color: black;
          color: white;
        }
      `}</style>

      <div className="calc-container">
        <h1>Calculadora</h1>

        <select className="calc-select" value={modo} onChange={(e) => setModo(e.target.value)}>
          <option value="normal">Normal</option>
          <option value="cientifica">Científica</option>
          <option value="financeira">Financeira</option>
        </select>

        {modo === "normal" && <CalculadoraNormal />}
        {modo === "cientifica" && <CalculadoraCientifica />}
        {modo === "financeira" && <CalculadoraFinanceira />}
      </div>
    </>
  );
}
