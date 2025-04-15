import { useState } from "react";

export default function TicTacToe() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [xColor, setXColor] = useState("#5CE202"); // Cor padrão para X
  const [oColor, setOColor] = useState("#FF5733"); // Cor padrão para O
  const vencedor = calcularVencedor(tabuleiro);

  const handleClick = (index) => {
    if (tabuleiro[index] || vencedor) return;
    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[index] = xIsNext ? "X" : "O";
    setTabuleiro(novoTabuleiro);
    setXIsNext(!xIsNext);
  };

  const jogarNovamente = () => {
    setTabuleiro(Array(9).fill(null));
    setXIsNext(true);
  };

  const status = vencedor
    ? `Vencedor: ${vencedor}`
    : tabuleiro.every((val) => val)
    ? "Empate!"
    : `Vez do: ${xIsNext ? "X" : "O"}`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h2>Jogo da Velha</h2>
      <div style={{ marginBottom: 20 }}>{status}</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 150px)",
          gap: 5,
          backgroundColor: "black",
          padding: 5,
        }}
      >
        {tabuleiro.map((valor, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            style={{
              width: 150,
              height: 150,
              fontSize: 48,
              color: valor === "X" ? xColor : valor === "O" ? oColor : "#5CE202",
              backgroundColor: "#111",
              border: "2px solid white",
              cursor: "pointer",
            }}
          >
            {valor}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 20, display: "flex", gap: 20 }}>
        <div>
          <label style={{ display: "block", marginBottom: 5 }}>Cor do X:</label>
          <input
            type="color"
            value={xColor}
            onChange={(e) => setXColor(e.target.value)}
            style={{ width: 50, height: 30 }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: 5 }}>Cor do O:</label>
          <input
            type="color"
            value={oColor}
            onChange={(e) => setOColor(e.target.value)}
            style={{ width: 50, height: 30 }}
          />
        </div>
      </div>

      {(vencedor || tabuleiro.every((val) => val)) && (
        <button
          onClick={jogarNovamente}
          style={{
            marginTop: 20,
            padding: "10px 20px",
            backgroundColor: "rgb(92, 226, 2)",
            color: "black",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
            borderRadius: "8px",
          }}
        >
          Jogar Novamente
        </button>
      )}
    </div>
  );
}

function calcularVencedor(squares) {
  const linhas = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of linhas) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}