import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <style>{`
        .header {
          background-color:rgb(0, 0, 0);
          padding: 15px;
        }

        .nav-links {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color:rgb(92, 226, 2);
          text-decoration: none;
        }

      `}</style>

      <header className="header">
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/calculadora">Calculadora</Link>
          <Link to="/countclick">Contador</Link>
          <Link to="/buscacep">Busca CEP</Link>
          <Link to="/tictactoe">Jogo da Velha</Link>
          <Link to="/todolist">ToDo List</Link>
        </nav>
      </header>
    </>
  );
}
