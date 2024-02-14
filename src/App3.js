import { useState } from "react";
import { useDebounce } from "./customHooks/useDebounce/useDebounce";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);
  const [val, setVal] = useState("");

  useDebounce(
    () => {
      // alert(count)
      console.log("####: Запроси мне API");
    },
    1000,
    [val]
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      </header>
    </div>
  );
}

export default App;
