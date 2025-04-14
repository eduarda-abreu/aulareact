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

        select {
          margin-bottom: 20px;
          padding: 8px;
          font-size: 16px;
        }
      `}</style>

      <div className="calc-container">
        <h1>Calculadora</h1>

        <select value={modo} onChange={(e) => setModo(e.target.value)}>
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
