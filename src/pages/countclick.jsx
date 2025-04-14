import { useState } from "react";

export default function CountClick() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Contador de Cliques</h1>
      <button onClick={() => setCount(count + 1)}>Clique: {count}</button>
    </>
  );
}
