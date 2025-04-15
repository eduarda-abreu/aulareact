// src/pages/todolist.jsx
import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input.trim()]);
      setInput("");
    }
  };

  const removeTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <>
      <style>{`
        .todo-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        input {
          padding: 12px;
          border-radius: 12px;
          border: solid;
          margin-bottom: 10px;
          width: 250px;
          font-size: 16px;
        }

        .btn {
          background-color: black;
          color: rgb(92, 226, 2);
          border: none;
          border-radius: 12px;
          padding: 10px 20px;
          font-size: 18px;
          margin: 5px;
          cursor: pointer;
        }

        .btn:hover {
          background-color: rgb(30, 30, 30);
        }

        ul {
          list-style: none;
          padding: 0;
          margin-top: 20px;
        }

        li {
          background-color: black;
          color: rgb(92, 226, 2);
          padding: 10px;
          border-radius: 10px;
          margin-bottom: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 300px;
        }

        .remove-btn {
          background: none;
          border: none;
          color: red;
          font-weight: bold;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>

      <div className="todo-container">
        <h2>To Do List</h2>
        <input
          type="text"
          value={input}
          placeholder="Digite uma tarefa"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button className="btn" onClick={addTask}>Adicionar</button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button className="remove-btn" onClick={() => removeTask(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
