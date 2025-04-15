import { useState } from "react";

export default function BuscaCEP() {
  const [cep, setCep] = useState("");
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState("");

  const buscarEndereco = async () => {
    setErro("");
    setResultado(null);
    if (cep.length !== 8) {
      setErro("CEP deve ter 8 dígitos.");
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setErro("CEP não encontrado.");
      } else {
        setResultado(data);
      }
    } catch (err) {
      setErro("Erro ao buscar o CEP.");
    }
  };

  return (
    <>
      <style>{`
        .busca-cep-container {
          text-align: center;
          padding: 20px;
        }

        .input-cep {
          padding: 10px;
          font-size: 16px;
          border-radius: 10px;
          border: solid ;
          margin-right: 10px;
          width: 200px;
        }

        .botao {
          background-color: black;
          color: limegreen;
          border: none;
          border-radius: 10px;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .botao:hover {
          background-color: #222;
        }

        .resultado-container {
          margin-top: 40px;
        }

        .resultado {
          color: white;
          background-color: #111;
          padding: 15px;
          border-radius: 10px;
          display: inline-block;
          text-align: left;
          margin-top: 10px;
        }

        .erro {
          color: red;
          margin-top: 10px;
        }
      `}</style>

      <div className="busca-cep-container">
        <h1>Busca CEP</h1>
        <input
          type="text"
          className="input-cep"
          placeholder="Digite o CEP (ex: 01001000)"
          value={cep}
          onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
        />
        <button className="botao" onClick={buscarEndereco}>
          Buscar
        </button>

        <div className="resultado-container">
          {erro && <div className="erro">{erro}</div>}

          {resultado && (
            <div className="resultado">
              <p><strong>Rua:</strong> {resultado.logradouro}</p>
              <p><strong>Bairro:</strong> {resultado.bairro}</p>
              <p><strong>Cidade:</strong> {resultado.localidade}</p>
              <p><strong>Estado:</strong> {resultado.uf}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
