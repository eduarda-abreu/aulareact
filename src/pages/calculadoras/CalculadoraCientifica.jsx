import { useState } from "react";

export default function CalculadoraCientifica() {
  const [expressao, setExpressao] = useState("");

  const adicionar = (valor) => setExpressao(expressao + valor);

  const limpar = () => setExpressao("");
  const apagar = () => setExpressao(expressao.slice(0, -1));

  const calcular = () => {
    try {
      const resultado = eval(
        expressao
          .replace(/π/g, Math.PI)
          .replace(/e/g, Math.E)
          .replace(/√/g, "Math.sqrt")
          .replace(/∛/g, "Math.cbrt")
          .replace(/sin/g, "Math.sin")
          .replace(/cos/g, "Math.cos")
          .replace(/tan/g, "Math.tan")
          .replace(/log/g, "Math.log10")
          .replace(/ln/g, "Math.log")
          .replace(/(\d+)!/g, (_, n) => fatorial(Number(n)))
      );
      setExpressao(String(resultado));
    } catch {
      setExpressao("Erro");
    }
  };

  const fatorial = (n) => (n <= 1 ? 1 : n * fatorial(n - 1));

  const botoes = [
    ["(", ")", "π", "e"],
    ["sin(", "cos(", "tan(", "ln("],
    ["log(", "√(", "∛(", "x²"],
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "xʸ", "+"],
    ["AC", "DEL", "!", "="],
  ];

  const tratarClick = (btn) => {
    if (btn === "AC") return limpar();
    if (btn === "DEL") return apagar();
    if (btn === "=") return calcular();
    if (btn === "x²") return adicionar("**2");
    if (btn === "x³") return adicionar("**3");
    if (btn === "xʸ") return adicionar("**");
    if (btn === "!") return adicionar("!");
    return adicionar(btn);
  };

  return (
    <div className="cientifica-container">
      <style>{`
        .cientifica-container {
          max-width: 400px;
          margin: 0 auto;
          text-align: center;
          font-family: sans-serif;
        }
        .tela {
          background: rgb(0,0,0);
          color: #0f0;
          font-size: 1.5rem;
          padding: 10px;
          border-radius: 8px;
          margin-bottom: 10px;
          min-height: 50px;
          word-wrap: break-word;
        }
        .botoes {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }
        button {
          padding: 15px;
          font-size: 1rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          background: rgb(0,0,0);
          color: rgb(92, 226, 2);
          transition: background 0.2s;
        }
        button:hover {
          background:  #2a2a2a;
        }
      `}</style>

      <h2>Calculadora Científica</h2>
      <div className="tela">{expressao}</div>
      <div className="botoes">
        {botoes.flat().map((btn, idx) => (
          <button key={idx} onClick={() => tratarClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
