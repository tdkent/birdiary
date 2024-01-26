import { useEffect, useState } from "react";

import { client } from "./main";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  useEffect(() => {
    console.log("Attempting to fetch data");
    const greeting = async () => {
      const result = await client.get.query();
      console.log("Result: ", result);
      // setMessage(result);
    };
    greeting();
  }, []);

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
