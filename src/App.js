import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "./pages/home";
import Calculadora from "./pages/calculadora";
import CountClick from "./pages/countclick";
import BuscaCep from "./pages/buscacep";
import TicTacToe from "./pages/tictactoe";
import TodoList from "./pages/todolist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/countclick" element={<CountClick />} />
          <Route path="/buscacep" element={<BuscaCep />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/todolist" element={<TodoList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
