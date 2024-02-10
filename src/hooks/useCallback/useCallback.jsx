import { useState, useCallback, useEffect } from "react";
import "./App.css";

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("####: useEffect getItems");
    setItems(getItems(5));
  }, [getItems]);

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeDark = {
    backgroundColor: dark ? "#282c23" : "white",
    color: dark ? "white" : "#282c23",
  };

  const getItems = useCallback(
    (inc) => {
      return [number + inc, number + 1 + inc, number + 2 + inc];
    },
    [number]
  );

  return (
    <div className="App">
      <header className="App-header" style={themeDark}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((s) => !s)}>Change Theme</button>
        <div>
          <List getItems={getItems} />
        </div>
      </header>
    </div>
  );

  function slowFunction(number) {
    const start = new Date().getTime();
    let end = start;

    while (end < start + 200) {
      end = new Date().getTime();
    }

    return number * 2;
  }
}

export default App;
