import { useState } from "react";

export default function CountClick() {
  const [count, setCount] = useState(0);

  return (
    <>
      <style>{`
        .center {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 60vh;
        }

        .click-btn {
          background-color: black;
          color: rgb(92, 226, 2);
          border: none;
          border-radius: 12px;
          padding: 20px 40px;
          font-size: 24px;
          margin: 10px;
          cursor: pointer;
        }

        .click-btn:hover {
          background-color: rgb(30, 30, 30);
        }

        h2 {
          font-size: 28px;
          margin-bottom: 20px;
        }

        .btn-group {
          display: flex;
          gap: 0px;
        }
      `}</style>

      <div className="center">
        <h2>Cliques: {count}</h2>
        <div className="btn-group">
          <button className="click-btn" onClick={() => setCount(count + 1)}>
            Clique Aqui
          </button>
          <button className="click-btn" onClick={() => setCount(0)}>
            Zerar
          </button>
        </div>
      </div>
    </>
  );
}