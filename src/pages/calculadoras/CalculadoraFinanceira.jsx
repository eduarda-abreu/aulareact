import { useState } from "react";
import "./App.css";

export default function CalculadoraFinanceira() {
  const [capital, setCapital] = useState("");
  const [taxa, setTaxa] = useState("");
  const [tempo, setTempo] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularJurosSimples = () => {
    const montante = parseFloat(capital) + (parseFloat(capital) * parseFloat(taxa) * parseFloat(tempo)) / 100;
    setResultado(montante.toFixed(2));
  };

  const calcularJurosCompostos = () => {
    const montante = parseFloat(capital) * Math.pow(1 + parseFloat(taxa) / 100, parseFloat(tempo));
    setResultado(montante.toFixed(2));
  };

  return (
    <div className="calculator">
      <h2>Calculadora Financeira</h2>
      <div className="button-grid">
        <input type="number" placeholder="Capital" value={capital} onChange={(e) => setCapital(e.target.value)} />
        <input type="number" placeholder="Taxa (%)" value={taxa} onChange={(e) => setTaxa(e.target.value)} />
        <input type="number" placeholder="Tempo" value={tempo} onChange={(e) => setTempo(e.target.value)} />
        <button className="button" onClick={calcularJurosSimples}>Juros Simples</button>
        <button className="button" onClick={calcularJurosCompostos}>Juros Compostos</button>
      </div>
      {resultado && <div className="display">Montante: R$ {resultado}</div>}
    </div>
  );
}
