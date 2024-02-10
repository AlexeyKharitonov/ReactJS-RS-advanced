import { useMemo, useState, useDeferredValue } from "react";
import "./App.css";

const LIST_SIZE = 20000;

function List({ input }) {
  const deferredInput = useDeferredValue(input);
  console.log("####: input", input);
  console.log("####: deferredInput", deferredInput);

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{input}</div>);
    }
    return l;
  }, [deferredInput]);

  return <div>{list}</div>;
}

function App() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={input} onChange={handleChange} />
        <List input={input} />
      </header>
    </div>
  );
}

export default App;
