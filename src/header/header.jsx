import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ background: "#f0f0f0", padding: "10px" }}>
      <nav>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/calculadora" style={{ margin: "0 10px" }}>Calculadora</Link>
        <Link to="/countclick" style={{ margin: "0 10px" }}>Contador</Link>
        <Link to="/buscacep" style={{ margin: "0 10px" }}>Busca CEP</Link>
        <Link to="/tictactoe" style={{ margin: "0 10px" }}>Jogo da Velha</Link>
        <Link to="/todolist" style={{ margin: "0 10px" }}>ToDo List</Link>
      </nav>
    </header>
  );
}
