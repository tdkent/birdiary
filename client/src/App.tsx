import { useState } from "react";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos((prev) => [...prev, text]);
    setText("");
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">New Todo:</label>
        <input value={text} type="text" onChange={handleChange} />
        <button>Add</button>
      </form>
      <div>
        {todos.map((t) => {
          return (
            <div key={t} title="todo-div">
              {t}
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default App;
