import { useState, useTransition } from "react";
import "./App.css";

const LIST_SIZE = 20000;

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={input} onChange={handleChange} />
        <div>
          {isPending
            ? "Загрузка..."
            : list.map((item, index) => <div key={index}>{item}</div>)}
        </div>
      </header>
    </div>
  );
}

export default App;
