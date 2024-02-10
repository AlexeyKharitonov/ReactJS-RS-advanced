import { useState, useMemo, useEffect } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeDark = useMemo(
    () => ({
      backgroundColor: dark ? "#282c23" : "white",
      color: dark ? "white" : "#282c23",
    }),
    [dark]
  );

  useEffect(() => {
    console.log("####: Change Theme Dark Constant");
  }, [themeDark]);

  return (
    <div className="App">
      <header className="App-header" style={themeDark}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((s) => !s)}>Change Theme</button>
        <div style={{ color: "black" }}>{doubleNumber}</div>
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
